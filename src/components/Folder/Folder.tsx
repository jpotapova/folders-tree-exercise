import React, { useState } from 'react';

import FolderProps from 'interfaces/Folder';

import './index.css';

const DEFAULT_INPUT_VALUE = '';

interface FolderComponentProps {
  folder: FolderProps;
  onAddClick: (id: number) => void;
}

function Folder(props: FolderComponentProps) {
  const { folder, onAddClick } = props;

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(DEFAULT_INPUT_VALUE);

  const handleAddClick = () => {
    setShowInput((prevShowInput) => {
      return !prevShowInput;
    });
    setInputValue(DEFAULT_INPUT_VALUE);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="folder">
      <span className="title">
        {folder.title || (
          <span className="placeholder">(folder with no name)</span>
        )}
        <span className="add">
          <button type="button" className="add-button" onClick={handleAddClick}>
            {showInput ? '\u2296' : '\u2295'}
          </button>
        </span>
      </span>

      {showInput && (
        <div className="name-input">
          &#9492;
          <input
            type="text"
            placeholder="type child name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="button" disabled={inputValue.length === 0}>
            Save
          </button>
        </div>
      )}
      {folder.children && (
        <div>
          {folder.children.map((childFolder: FolderProps) => (
            <Folder
              folder={childFolder}
              key={childFolder.title}
              onAddClick={onAddClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Folder;
