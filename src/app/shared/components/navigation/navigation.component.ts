import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private activeRoute: string;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout(): void {
    this.authService.logout();
  }

  setActiveRoute(route: string) {
    this.activeRoute = route;
  }
}
