import { FolderProps } from 'interfaces';

const folders: Array<FolderProps> = [
  {
    id: 1,
    title: 'folder1',
    children: [
      {
        id: 2,
        title: 'folder1.1',
        children: [],
      },
      {
        id: 3,
        title: 'folder1.2',
        children: [],
      },
    ],
  },
  {
    id: 4,
    title: 'folder2',
    children: [
      {
        id: 5,
        title: 'folder2.1',
        children: [
          {
            id: 6,
            title: '',
            children: [
              {
                id: 7,
                title: 'folder2.1.1.1',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        title: 'folder2.2',
        children: [],
      },
    ],
  },
];

export default folders;
