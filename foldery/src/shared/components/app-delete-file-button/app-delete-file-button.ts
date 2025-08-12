import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-file-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './app-delete-file-button.html',
  styleUrl: './app-delete-file-button.css',
})
export class AppDeleteFileButton {
  @Output() deleteClicked = new EventEmitter<void>();

  onDelete(): void {
    this.deleteClicked.emit();
  }
}
