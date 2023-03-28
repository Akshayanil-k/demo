import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table-emp',
  templateUrl: './table-emp.component.html',
  styleUrls: ['./table-emp.component.scss']
})
export class TableEmpComponent {
  empDetails: any

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
}
