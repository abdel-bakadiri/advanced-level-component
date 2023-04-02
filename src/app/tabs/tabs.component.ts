import { Subscription } from 'rxjs';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabModel } from '../model/tab-model';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  onClickSubscriptions: Subscription[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.tabs.forEach((tab) => {
      const onClickTabSubscription = tab.onClick.subscribe(() => {
        console.log(`tab ${tab.title} is selected`);
      });
      this.onClickSubscriptions.push(onClickTabSubscription);
    });
    this.selectTab(this.tabs.first);
  }

  addTab(tab: TabModel) {}
  selectTab(tab: TabModel) {
    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
    tab.isActive = true;
  }

  ngOnDestroy(): void {
    this.onClickSubscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
