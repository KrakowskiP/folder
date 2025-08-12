import { FileType } from '../shared/enums/fileType.enum';
import { UserFile } from '../shared/interface/user-file.interface';

export const FILES_DATA: UserFile = {
  name: 'PROJEKTY',
  type: FileType.Folder,
  children: [
    {
      name: 'Klient ABC',
      type: FileType.Folder,
      children: [],
    },
    {
      name: 'Klient XYZ',
      type: FileType.Folder,
      children: [
        {
          name: '__COMMON',
          type: FileType.Folder,
          children: [],
        },
        {
          name: 'XYZ_P001_202202 wizytowka',
          type: FileType.Folder,
          children: [],
        },
        {
          name: 'XYZ_P001_202205 plakat',
          type: FileType.Folder,
          children: [
            { name: 'Links', type: FileType.Folder, children: [] },
            { name: 'Materials', type: FileType.Folder, children: [] },
            { name: 'Old', type: FileType.Folder, children: [] },
            { name: 'Out', type: FileType.Folder, children: [] },
          ],
        },
      ],
    },
  ],
};
