import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  Renderer2,
  ViewContainerRef,
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
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild(SimpleAlertViewComponent)
  alert!: SimpleAlertViewComponent;
  @ViewChild('input') inputTime!: ElementRef;
  title = 'advanced-level-component';
  durations = [3, 20, 185];
  time = 0;
  showAlertView = false;
  showAlertTimerFinished = false;
  setTimeoutRef: any;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private renderer2: Renderer2
  ) {}
  ngAfterContentInit(): void {}
  ngAfterViewInit(): void {
    if (this.inputTime) {
      this.renderer2.setAttribute(
        this.inputTime.nativeElement,
        'placeholder',
        'set seconds'
      );
      this.renderer2.addClass(this.inputTime.nativeElement, 'input-border');
    }
  }

  handleClickShowTimer() {
    this.showAlertView = true;
    setTimeout(() => {
      this.renderer2.selectRootElement(this.inputTime.nativeElement).focus();
    });
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
  handelClick() {
    if (this.container) {
      this.container.createComponent(SimpleAlertViewComponent);
    }
  }
}
