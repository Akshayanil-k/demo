import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {


  public empDetails:any='';
  userId: any;


  constructor(private service:ApiService, private authservice : AuthServiceService, private router:Router, private activatedrouter :ActivatedRoute){}

  ngOnInit(){
    this.activatedrouter.params.subscribe((params:any)=>{
      if (params.id == undefined) {
        this.userId=params.id
      }
      this.userId=params.id
    })
    this.service.getUser(this.userId).subscribe(
     ( res) => {this.empDetails=res
      console.log(this.empDetails);
    })
  }



  logOut(){
    localStorage.clear()
    this.router.navigate(['./login'])

  }
  toEdit(id:number){
    this.router.navigate(['/employee-edit',id])
  }

  leaveApply(id:number){
    this.router.navigate(['/apply-leave',id])
  }
  


}
