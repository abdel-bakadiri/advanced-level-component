import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements AfterViewInit, AfterContentInit, OnDestroy
{
  @ViewChild(SimpleAlertViewComponent) alert!: SimpleAlertViewComponent;
  title = 'advanced-level-component';
  durations = [3, 20, 185];
  time = 0;
  showAlertView = false;
  showAlertTimerFinished = false;
  setTimeoutRef: any;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngAfterContentInit(): void {}
  ngAfterViewInit(): void {
    this.alert.visible = true;
    this.alert.title = 'Alert';
    this.alert.message = 'Welcome the world of Angular';
    this.changeDetectorRef.detectChanges();
    this.setTimeoutRef = setTimeout(() => {});
  }

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
  onDismiss() {
    this.alert.visible = false;
  }

  ngOnDestroy(): void {
    clearTimeout(this.setTimeoutRef);
  }
}
