
import { UserData } from '../shared/types/userData.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private loggedInUser: UserData;
  public loggedInUserChanged: BehaviorSubject<UserData> = new BehaviorSubject(null);

  constructor(
    private router: Router
  ) {
    this.loggedInUserChanged.subscribe(userData => {
      this.loggedInUser = userData;
    });
  }

  isAuthenticated(): boolean {
    return true;
  }

  initAuthListener(): void {

  }

  registerUser(): void {
 
  }

  login(userData: UserData): void {
    const mockUser: UserData  = {
        userId: '1',
        email: 'test@test.com'
    }
    this.loggedInUserChanged.next(mockUser);
  }

  logout(): void {
    this.loggedInUserChanged.next(null);
  }
}