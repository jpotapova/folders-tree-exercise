import React from 'react';

import Folder from 'components/Folder';
import { FolderProps } from 'interfaces';

interface FoldersTreeComponentProps {
  folders: Array<FolderProps> | undefined;
  onAdd: (id: number, value: string) => void;
}

function FoldersTree(props: FoldersTreeComponentProps) {
  const { folders, onAdd } = props;

  return (
    <div>
      {folders?.map((folder: FolderProps) => (
        <Folder folder={folder} key={folder.id} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default FoldersTree;
