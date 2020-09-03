import React, { useState } from 'react';

import FoldersTree from 'components/FoldersTree';
import FolderProps from 'interfaces/Folder';

import AddFolderForm from './AddFolderForm';
import AddButton from './AddButton';

import './index.css';

interface FolderComponentProps {
  folder: FolderProps;
  onAdd: (id: number, value: string) => void;
}

function Folder(props: FolderComponentProps) {
  const { folder, onAdd } = props;

  const [showInput, setShowInput] = useState(false);

  const handleAddClick = () => {
    setShowInput((prevShowInput) => {
      return !prevShowInput;
    });
  };

  const handleSaveClick = (id: number, value: string) => {
    onAdd(id, value);
    setShowInput(false);
  };

  return (
    <div className="folder">
      <span className="title">
        {folder.title || (
          <span className="title__placeholder">(folder with no name)</span>
        )}
        <AddButton expanded={showInput} onClick={handleAddClick} />
      </span>
      <AddFolderForm
        show={showInput}
        id={folder.id}
        onClick={handleSaveClick}
      />
      <FoldersTree folders={folder.children} onAdd={onAdd} />
    </div>
  );
}

export default Folder;
