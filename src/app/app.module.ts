import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './child-components/display/display.component';
import { ProgressBarComponent } from './child-components/progress-bar/progress-bar.component';
import { TimerComponent } from './containers/timer/timer.component';
import { AlertViewComponent } from './shared/alert-view/alert-view.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayComponent,
    ProgressBarComponent,
    AlertViewComponent,
    TabComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
