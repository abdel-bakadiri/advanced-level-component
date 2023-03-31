import { TabsComponent } from './../tabs/tabs.component';
import { TabModel } from './../model/tab-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit, TabModel {
  @Input() title!: string;
  public isActive = false;

  constructor(private tabs: TabsComponent) {}

  ngOnInit(): void {
    this.tabs.addTab(this);
  }
}
