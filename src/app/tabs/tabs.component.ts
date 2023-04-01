import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { TabModel } from '../model/tab-model';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit {
  @ContentChild(TabComponent) tab!: TabComponent;
  public tabs: TabModel[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.tab) {
      console.log(this.tab);
      this.tab.onClick.subscribe(() => {
        console.log('Event handled');
      });
      this.addTab(this.tab);
    }
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
