import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppFileTree } from '../shared/components/app-file-tree/app-file-tree';
import { AppUser } from '../shared/components/app-user/app-user';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, AppFileTree, AppUser],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('foldery');
}
