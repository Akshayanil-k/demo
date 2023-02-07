

import {
  Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, OnChanges, OnDestroy, Input, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
//implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
 // AfterViewInit, AfterViewChecked, OnDestroy {
 // title(title: any) {
  //  throw new Error('Method not implemented.');
  //}

  displayChild: boolean = false;
  //value: string = 'succes';

 /* constructor() {
    console.log("AppComponent:Constructor");
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent:OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
  ngAfterContentInit() {
    console.log("AppComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy");
  }*/
  onShowOrHide(): void{
    this.displayChild = !this.displayChild;
  }
  }