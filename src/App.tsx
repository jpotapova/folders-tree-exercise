import React, { useState } from 'react';

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
        children: [
          {
            title: 'folder2.1.1',
            children: [
              {
                title: 'folder2.1.1.1',
              },
            ],
          },
        ],
      },
      {
        title: 'folder2.2',
      },
    ],
  },
];

function App() {
  const [foldersTree, setFoldersTree] = useState(tree);

  const onClick = (title: string) => {
    setFoldersTree((prevTree) => {
      return prevTree.map((folder) => {
        if (folder.title === title) {
          folder.children.push({
            title: 'new item',
          });
        }

        folder.children = folder.children.map((child) => {
          return child;
        });

        return folder;
      });
    });
  };

  return (
    <>
      {foldersTree.map((folder: FolderProps) => (
        <Folder
          title={folder.title}
          children={folder.children}
          key={folder.title}
          onClick={onClick}
        />
      ))}
    </>
  );
}

export default App;
