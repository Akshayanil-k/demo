import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:3000/profile'

  getEmp(){
    return this.http.get('http://localhost:3000/profile')
  }
  deleteUser(id:any){
    return this.http.delete('http://localhost:3000/profile'+'/'+id)
  }
  postUser(formData:any){
    return this.http.post('http://localhost:3000/profile',formData)
  }
  getUser(id:number){
    return this.http.get('http://localhost:3000/profile/'+id)
  }
  patchUser(id:any,regData:any){
    return this.http.patch('http://localhost:3000/profile/'+id,regData)
  }
  patchLeave(id:number,formData:any){
    return this.http.patch('http://localhost:3000/profile/'+id,formData)
  }
  putleave(id:number,formData:any){
    return this.http.patch('http://localhost:3000/profile/'+id,formData)
  }
  searchEmpName(search:string){
    return this.http.get('http://localhost:3000/profile/'+search)
  }

}
