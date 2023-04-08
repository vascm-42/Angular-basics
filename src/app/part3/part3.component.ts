import { Component } from '@angular/core';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css'],
})
export class Part3Component {
  hidden: boolean = false;
  log: any = [];

  onToggleDetail() {
    this.hidden = !this.hidden;
    this.log.push(this.log.length + 1);
  }
}
