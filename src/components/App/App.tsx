import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

import FoldersTree from 'components/FoldersTree';
import { FolderProps } from 'interfaces';

import folders from './initialData';

function App() {
  const [foldersTree, setFoldersTree] = useState<Array<FolderProps>>(folders);

  const handleAdd = (id: number, value: string) => {
    const newFolder: FolderProps = {
      id: parseInt(uniqueId(), 10),
      title: value,
      children: [],
    };

    const insertNewFolder = (folder: FolderProps): FolderProps => {
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

    setFoldersTree((prevTree: Array<FolderProps>) => {
      return prevTree.map(insertNewFolder);
    });
  };

  return <FoldersTree folders={foldersTree} onAdd={handleAdd} />;
}

export default App;
