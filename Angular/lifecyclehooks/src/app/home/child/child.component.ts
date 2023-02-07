import {
  Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, OnChanges, OnDestroy, Input, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  displaychild2: boolean = false;

  onShowOrHide(): void {
    this.displaychild2 = !this.displaychild2;
  }
}