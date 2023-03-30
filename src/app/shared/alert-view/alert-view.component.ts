import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.scss'],
})
export class AlertViewComponent implements OnInit {
  @Output() emitCancel = new EventEmitter<void>();
  @Output() emitTime = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
  handleCancel() {
    this.emitCancel.emit();
  }
  handelSubmit() {
    this.emitTime.emit();
  }
}
