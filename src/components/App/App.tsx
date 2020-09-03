import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

import FoldersTree from 'components/FoldersTree';

import folders from './initialData';

function App() {
  const [foldersTree, setFoldersTree] = useState(folders);

  const handleAdd = (id: number, value: string) => {
    const newFolder = {
      id: uniqueId(),
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
