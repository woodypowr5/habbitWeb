import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home-content-page.component';
import { ActivitiesComponent } from './activities/activities.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home ', component: HomeComponent },
  { path: 'login ', component: LoginComponent },
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuardService]},
  { path: 'log', component: LogComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
