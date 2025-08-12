import { Component, Input } from '@angular/core';
import { UserFile } from '../../interface/user-file.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../service/user.service';
import { AppFileUploadButton } from '../app-file-upload-button/app-file-upload-button';
import { AppDeleteFileButton } from '../app-delete-file-button/app-delete-file-button';
import { FileType } from '../../enums/fileType.enum';

@Component({
  selector: 'app-file-tree-recurency',
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    AppFileUploadButton,
    AppDeleteFileButton,
  ],
  templateUrl: './app-file-tree-recurency.html',
  styleUrl: './app-file-tree-recurency.css',
})
export class AppFileTreeRecurency {
  constructor(private userService: UserService) {}
  @Input() node!: UserFile;
  @Input() parent?: UserFile;
  isExpanded: boolean = false;
  currentUser: string = '';
  FileType = FileType;

  get hasUserPrivilige(): boolean {
    return (
      this.node.creator === 'admin' || this.currentUser === this.node.creator
    );
  }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  toggle(): void {
    if (this.node.type === FileType.Folder) {
      this.isExpanded = !this.isExpanded;
    }
  }

  addFileToFolder(selectedFile: File, parent: UserFile): void {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({
      name: selectedFile.name,
      type: FileType.File,
      fileObject: selectedFile,
      creator: this.currentUser,
    });
  }

  downloadFile(node: UserFile): void {
    if (node.fileObject) {
      const url = URL.createObjectURL(node.fileObject);
      const a = document.createElement('a');
      a.href = url;
      a.download = node.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  deleteFile(parent: UserFile, node: UserFile): void {
    if (parent.children) {
      parent.children = parent.children.filter((child) => child !== node);
    }
  }
}
