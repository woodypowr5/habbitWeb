import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private activeRoute: string = 'log';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  logout(): void {
    this.authService.logout();
  }

  setActiveRoute(route: string) {
    this.activeRoute = route;
    this.router.navigate([route]);
  }
}
