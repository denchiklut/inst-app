import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-inst',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent {
  @Input() users;
  isMarked = false;

   onClick() {
     this.isMarked = true;
  }
}
