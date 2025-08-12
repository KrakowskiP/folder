import { Component, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserType } from '../../enums/userType.enum';

@Component({
  selector: 'app-user',
  imports: [MatRadioModule, FormsModule],
  templateUrl: './app-user.html',
  styleUrl: './app-user.css',
})
export class AppUser implements OnInit {
  constructor(private userService: UserService) {}
  currentUser: string = '';
  possibleUsers: UserType[] = [UserType.Admin, UserType.User1, UserType.User2];

  ngOnInit(): void {
    const randomUser =
      this.possibleUsers[Math.floor(Math.random() * this.possibleUsers.length)];
    this.userService.setUser(randomUser);

    this.currentUser = randomUser;
  }

  updateCurrentUser(value: string): void {
    this.userService.setUser(value);
  }
}
