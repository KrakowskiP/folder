import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<string>(
    sessionStorage.getItem('currentUser') || '',
  );
  currentUser$ = this.currentUserSubject.asObservable();

  setUser(user: string) {
    sessionStorage.setItem('currentUser', user);
    this.currentUserSubject.next(user);
  }
}
