import React, { useState } from 'react';

import FoldersTree from 'components/FoldersTree';
import FolderProps from 'interfaces/Folder';

import AddFolderForm from './AddFolderForm';
import AddButton from './AddButton';

import './index.css';

interface FolderComponentProps {
  folder: FolderProps;
  onAddClick: (id: number) => void;
}

function Folder(props: FolderComponentProps) {
  const { folder, onAddClick } = props;

  const [showInput, setShowInput] = useState(false);

  const handleAddClick = () => {
    setShowInput((prevShowInput) => {
      return !prevShowInput;
    });
  };

  return (
    <div className="folder">
      <span className="title">
        {folder.title || (
          <span className="title__placeholder">(folder with no name)</span>
        )}
        <AddButton expanded={showInput} onClick={handleAddClick} />
      </span>
      <AddFolderForm show={showInput} />
      <FoldersTree folders={folder.children} />
    </div>
  );
}

export default Folder;
