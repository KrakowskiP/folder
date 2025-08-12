import { FileType } from '../enums/fileType.enum';

export interface UserFile {
  name: string;
  type: FileType.Folder | FileType.File;
  children?: UserFile[];
  fileObject?: File;
  creator?: string;
}
