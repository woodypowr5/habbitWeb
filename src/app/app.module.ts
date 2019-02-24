import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home-content-page.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AuthService } from './auth/auth.service';
import { CollapsibleModule } from 'angular2-collapsible';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivitiesActionsComponent } from './activities/activities-actions/activities-actions.component';
import { ActivityInstanceComponent } from './activities/activity-list/activity-instance/activity-instance.component';
import { LogComponent } from './log/log.component';
import { DateSliderComponent } from './log/date-slider/date-slider.component';
import { RecordDetailsComponent } from './log/record-details/record-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    ActivitiesComponent,
    ActivityListComponent,
    ActivitiesActionsComponent,
    ActivityInstanceComponent,
    LogComponent,
    DateSliderComponent,
    RecordDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    CollapsibleModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
