import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.scss']
})
export class LeaveApplyComponent {
  userId: any;

  constructor(private fb : FormBuilder,public service:ApiService, public router:Router, private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.activatedroute.params.subscribe((params:any)=>{
      if (params.id == undefined) {
        this.userId=params.id
      }
      this.userId=params.id
    })
  }


  

    leaveForm = this.fb.group({
    leavereason : ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50)])],
    leavetype : ['', Validators.compose([Validators.required])],
    leavedaytype : ['', Validators.compose([Validators.required])],
    leavefrom : ['', Validators.compose([Validators.required])],
    leaveto : ['', Validators.compose([Validators.required])],
    numberofdays : ['', Validators.compose([Validators.required,Validators.pattern("^\s*-?[0-9]{1,2}\s*$")])],
  });
  
  leaveData:any='';


  onSubmit(form: FormGroup) {
    this.leaveData = form.value;
  
    // Get the current value of noofleaves and leaveDates from the API
    this.service.getUser(this.userId).subscribe((res: any) => {
      const currentNoOfLeaves = res.noofleaves;
  
      // Increment the value of noofleaves and update the employee data
      const updatedNoOfLeaves = currentNoOfLeaves + this.leaveData.numberofdays;
      this.service.putleave(this.userId, { noofleaves: updatedNoOfLeaves }).subscribe(() => {
  
        // Calculate all the dates between leavefrom and leaveto dates
        const leaveFromDate = new Date(this.leaveData.leavefrom);
        const leaveToDate = new Date(this.leaveData.leaveto);
        const allLeaveDates = [];
        while (leaveFromDate <= leaveToDate) {
          allLeaveDates.push(new Date(leaveFromDate));
          leaveFromDate.setDate(leaveFromDate.getDate() + 1);
        }
  
        // Update the employee's record with all the leave dates
        const updatedLeaveDates = Array.isArray(res.leaveDates) ? [...res.leaveDates, ...allLeaveDates] : allLeaveDates;
        this.service.putleave(this.userId, { leaveDates: updatedLeaveDates }).subscribe(() => {
  
          // After updating the employee data, post the leave data
          this.service.patchLeave(this.userId, this.leaveData).subscribe(() => {
            console.log("Leave Successfully Applied");
            alert("Leave Successfully Applied");
            this.router.navigate(['/employee-dashboard', this.userId]);
          });
        });
      });
    });
  }
  
  
  
  

  logOut(){
    localStorage.clear()
    this.router.navigate(['./login'])

  }

  empHome(id:number){
    this.router.navigate(['/employee-dashboard',id])
  }

}
