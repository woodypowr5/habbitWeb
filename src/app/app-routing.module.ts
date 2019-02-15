import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home-content-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home ', component: HomeComponent },
  { path: 'login ', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
