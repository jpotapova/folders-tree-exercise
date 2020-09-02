import React from 'react';

import Folder, { FolderProps } from './Folder';

import './App.css';

const tree = [
  {
    title: 'folder1',
    children: [
      {
        title: 'folder1.1',
      },
      {
        title: 'folder1.2',
      },
    ],
  },
  {
    title: 'folder2',
    children: [
      {
        title: 'folder2.1',
      },
      {
        title: 'folder2.2',
      },
    ],
  },
];

function App() {
  return (
    <>
      {tree.map((folder: FolderProps) => (
        <Folder
          title={folder.title}
          children={folder.children}
          key={folder.title}
        />
      ))}
    </>
  );
}

export default App;
