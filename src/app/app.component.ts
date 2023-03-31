import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'advanced-level-component';
  durations = [3, 20, 185];
  time = 0;
  showAlertView = false;
  showAlertTimerFinished = false;
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
    this.durations.push(this.time);
  }
  onClickCanlTimerWasFinished() {
    this.showAlertTimerFinished = false;
  }
  onCompletTimer() {
    this.showAlertTimerFinished = true;
  }
}
