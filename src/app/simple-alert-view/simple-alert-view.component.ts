import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.scss'],
})
export class SimpleAlertViewComponent implements OnInit {
  constructor() {}

  @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();
  @Input() title!: string;
  @Input() message!: string;
  public visible: boolean = true;

  ngOnInit() {}

  public dismiss() {
    this.visible = false;
    // this.onDismiss.emit();
  }

  public show() {
    this.visible = true;
  }
}
