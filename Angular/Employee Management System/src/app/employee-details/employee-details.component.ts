import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {

  public empDetails:any='';
  userId: any;
  datestr=""

  constructor(private service : ApiService, private activatedRoute : ActivatedRoute, private router : Router){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:any)=>{
      if (params.id == undefined) {
        this.userId=params.id
      }
      this.userId=params.id
    })
    this.service.getUser(this.userId).subscribe(
     ( res) => {this.empDetails=res
      // this.datestr = this.empDetails.leaveDates;
      // const dateOnly = new Date(this.datestr).toISOString().slice(:);
      console.log(this.empDetails);
    })
  }

  toEdit(id:number){
    this.router.navigate(['/employee-edit',id])
  }

  onDelete(id:number){
    this.service.deleteUser(id).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/employee-list'])
      });
      alert("empDetails Deleted")
  }

}
