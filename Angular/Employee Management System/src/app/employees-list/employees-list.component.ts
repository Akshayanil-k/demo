import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {

  public empDetails:any='';
  searchValue: string=''
constructor(private service : ApiService, private router : Router){
  
}

ngOnInit(){
  this.getEmp();
}

getEmp(){
  this.service.getEmp().subscribe(res=>{
    console.log(res);
    this.empDetails=res;
  })
}

search() {
  if (this.searchValue) {
    this.empDetails = this.empDetails.filter((item: { fname: string; lname: string; emprole: string; email: string; id: number; }) => 
      item.fname.toLowerCase().includes(this.searchValue.toLowerCase()) ||   // includes() method  used to check if the property value contains the search input
      item.lname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      item.emprole.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      item.id.toString().includes(this.searchValue.toLowerCase())    // toString() method  used to convert the id property from a number to a string 
    );
  } else {
    this.ngOnInit();
  }
}





empDetail(id:number){
  this.router.navigate(['/employee-details',id])
}


}







