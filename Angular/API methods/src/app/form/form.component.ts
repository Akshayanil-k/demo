import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formGroup = this.fb.group({
      ID: ['', Validators.required],
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      Address: ['', Validators.required],
    });
  }

  createData() {
    this.dataService.createData(this.formGroup.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  updateData() {
    this.dataService.updateData(this.formGroup.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  patchData() {
    this.dataService.patchData(this.formGroup.value)
      .subscribe(response => {
        console.log(response);
      });
  }

  deleteData() {
    this.dataService.deleteData()
      .subscribe(response => {
        console.log(response);
      });
  }
}
