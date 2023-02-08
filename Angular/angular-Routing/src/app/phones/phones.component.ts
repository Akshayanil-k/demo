import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent {
  public phonename:string='';
  constructor(public activaterouter:ActivatedRoute){
    activaterouter.params.subscribe((param:any)=>{
    console.log(param);
    this.phonename=param.phonename;
    })
  }

}
