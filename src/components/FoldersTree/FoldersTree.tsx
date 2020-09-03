import React from 'react';

import Folder from 'components/Folder';
import FolderProps from 'interfaces/Folder';

interface FoldersTreeComponenttProps {
  folders: Array<FolderProps> | undefined;
}

function FoldersTree(props: FoldersTreeComponenttProps) {
  const { folders } = props;
  return (
    <div>
      {folders?.map((folder: FolderProps) => (
        <Folder
          folder={folder}
          key={folder.id}
          onAddClick={(id) => {
            console.log('id');
          }}
        />
      ))}
    </div>
  );
}

export default FoldersTree;
