import { Component, OnInit } from '@angular/core';
import { TabModel } from '../model/tab-model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public tabs: TabModel[] = [];
  constructor() {}

  ngOnInit(): void {
    // this.addTab({ isActive: false, title: 'tab 1' });
    // this.addTab({ isActive: false, title: 'tab 2' });
    // this.addTab({ isActive: false, title: 'tab 3' });
  }

  addTab(tab: TabModel) {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }
  selectTab(tab: TabModel) {
    for (let tab of this.tabs) {
      tab.isActive = false;
    }
    tab.isActive = true;
  }
}
