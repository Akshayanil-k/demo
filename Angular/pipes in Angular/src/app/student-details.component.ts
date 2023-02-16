import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-details',
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let student of students">
          <td>{{ student.name | titleCase:student.gender }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.grade }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class StudentDetailsComponent {
  students: Student[] = [
    {
      name: 'John Smith',
      gender: 'male',
      age: 18,
      grade: '12th',
    },
    {
      name: 'Jane Doe',
      gender: 'female',
      age: 17,
      grade: '11th',
    },
  ];
}
