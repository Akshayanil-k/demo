import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'http://localhost:3000/profile ';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.employeesUrl);
  }
}


