import { TabsComponent } from './../tabs/tabs.component';
import { TabModel } from './../model/tab-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit, TabModel {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title!: string;
  public isActive = false;

  constructor() {}

  ngOnInit(): void {}

  handelClickTabContent() {
    this.onClick.emit();
  }
}
