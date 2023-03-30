import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'advanced-level-component';
  time = 0;
  showAlertView = false;
  handleClickShowTimer() {
    this.showAlertView = true;
  }
  onEmitCancel() {
    this.showAlertView = false;
  }
  onEmitTime() {
    console.log('👀 time', this.time);
  }
  onClickCancel() {
    this.showAlertView = false;
  }
  onSubmitTime() {
    console.log(this.time);
  }
}
