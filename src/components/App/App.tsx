import React, { useState } from 'react';

import Folder from 'components/Folder';
import FolderProps from 'interfaces/Folder';

import folders from './initialData';

function App() {
  const [foldersTree, setFoldersTree] = useState<Array<FolderProps>>(folders);

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

  return (
    <>
      {foldersTree.map((folder: FolderProps) => (
        <Folder
          folder={folder}
          key={folder.id}
          onAddClick={(id) => {
            console.log('id');
          }}
        />
      ))}
    </>
  );
}

export default App;
