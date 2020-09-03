import React, { useState } from 'react';

import FolderProps from 'interfaces/Folder';

import folders from './initialData';
import FoldersTree from 'components/FoldersTree';

function App() {
  const [foldersTree, setFoldersTree] = useState(folders);

  const handleAdd = (id: number, value: string) => {
    const newFolder = {
      id: 999,
      title: value,
      children: [],
    };

    const insertNewFolder = (folder: any) => {
      if (folder.id === id) {
        return {
          ...folder,
          children: [newFolder, ...folder.children],
        };
      }

      return {
        ...folder,
        children: folder.children.map(insertNewFolder),
      };
    };

    setFoldersTree((prevTree) => {
      return prevTree.map(insertNewFolder);
    });
  };

  return <FoldersTree folders={foldersTree} onAdd={handleAdd} />;
}

export default App;
