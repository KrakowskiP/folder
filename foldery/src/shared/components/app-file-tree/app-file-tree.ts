import { Component } from '@angular/core';
import { UserFile } from '../../interface/user-file.interface';
import { FILES_DATA } from '../../../data/files.data';
import { AppFileTreeRecurency } from '../app-file-tree-recurency/app-file-tree-recurency';

@Component({
  selector: 'app-file-tree',
  imports: [AppFileTreeRecurency],
  templateUrl: './app-file-tree.html',
  styleUrl: './app-file-tree.css',
})
export class AppFileTree {
  files: UserFile = FILES_DATA;
}
