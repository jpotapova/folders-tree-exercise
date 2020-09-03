import React, { useState } from 'react';

import FolderProps from 'interfaces/Folder';

import folders from './initialData';
import FoldersTree from 'components/FoldersTree';

function App() {
  const [foldersTree, setFoldersTree] = useState<Array<FolderProps>>(folders);

  const handleAdd = (id: number, value: string) => {
    console.log(id, value);
  };

  // const onClick = (title: string) => {
  //   setFoldersTree((prevTree: Array<FolderProps>) => {
  //     return prevTree.map((folder) => {
  // if (folder.title === title) {
  //   folder.children?.push({
  //     title: 'new item',
  //   });
  // }

  // folder.children = folder.children?.map((child) => {
  //   return child;
  // });
  //       return folder;
  //     });
  //   });
  // };

  return <FoldersTree folders={foldersTree} onAdd={handleAdd} />;
}

export default App;
