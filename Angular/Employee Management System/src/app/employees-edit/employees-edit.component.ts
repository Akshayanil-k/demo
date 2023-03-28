import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeeseditComponent implements OnInit {


  constructor(private fb : FormBuilder,private service:ApiService, private router:Router, private activatedrouter:ActivatedRoute){}

  userId:any


  ngOnInit() {
    this.activatedrouter.params.subscribe((params:any)=>{
      if (params.id == undefined) {
        this.userId=params.id
      }
      this.userId=params.id
    })
    this.service.getUser(this.userId).subscribe(
     ( res) => {this.empData=res
      this.regForm.patchValue({fname:this.empData.fname,lname:this.empData.lname,email:this.empData.email,emprole:this.empData.emprole,age:this.empData.age,dob:this.empData.dob,gender:this.empData.gender,bloodgroup:this.empData.bloodgroup,phone:this.empData.phone,password:this.empData.password,confirmpassword:this.empData.confirmpassword,img:this.empData.img})
      // console.log(this.empData);
    })
    
    }

    regForm = this.fb.group({
    fname : ['', Validators.compose([Validators.pattern("[a-zA-Z ]*")])],
    lname : ['', Validators.compose([Validators.pattern("[a-zA-Z ]*")])],
    email : ['', Validators.compose([Validators.email,Validators.minLength(5)])],
    emprole : ['', Validators.compose([Validators.minLength(3),Validators.maxLength(25)])],
    age : ['', Validators.compose([Validators.pattern("[0-9]{2}$")])],
    dob : [''],
    gender : [''],
    bloodgroup : [''],
    phone : ['', Validators.compose([Validators.pattern("[0-9]{10}$")])],
    password :['', Validators.compose([Validators.pattern("(?=.*\)(?=.*[a-z])(?=.*[A-Z]).{8,15}")])],
    confirmpassword :[''],
    img : [''],
    id:['']
  },
  {
    validators:this.Mustmatch('password','confirmpassword')
  });

  Mustmatch(password:any,confirmpassword:any){
     return (formGroup:FormGroup)=>{
      const passwordcontrol=formGroup.controls[password];
      const confirmpasswordcontrol=formGroup.controls[confirmpassword];
      if(confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['Mustmatch']){
        return;
       }
      if(passwordcontrol.value!==confirmpasswordcontrol.value){
        
        confirmpasswordcontrol.setErrors({Mustmatch:true});
      }else{
         confirmpasswordcontrol.setErrors(null);
      
      } 
    
    };
  }
  
  empData:any='';
  

  onSubmit(form: FormGroup) { 
    
    if (form.value.fname != "") {
      this.empData=form.value;
      const imgFile = (<HTMLInputElement>document.getElementById('img'));
      if (imgFile && imgFile.files && imgFile.files.length > 0) {
        const imgName = imgFile.files[0].name;
        this.empData.img = '../assets/img/'+imgName;
      }
    }
      
    this.service.patchUser(this.userId,this.empData).subscribe((res) => {
      console.log(res);
      this.empData=res
      if (localStorage.getItem('user') == 'admin') {
        this.router.navigate(['/employee-details',this.empData.id]);
      }else{
        this.router.navigate(['/employee-dashboard',this.empData.id]);
  }
  
    } );
  
}
  
}