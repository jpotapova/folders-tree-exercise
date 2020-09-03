import React, { useState, useEffect } from 'react';

import './index.css';

interface AddFolderFormComponentProps {
  id: number;
  show: boolean;
  onClick: (id: number, value: string) => void;
}

function AddFolderForm(props: AddFolderFormComponentProps) {
  const { show, id, onClick } = props;

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue('');
  }, [show]);

  if (!show) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(id, inputValue);
  };

  return (
    <div className="add-folder">
      <span className="add-folder__relation">&#9492;</span>
      <input
        type="text"
        placeholder="type child name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="button"
        disabled={inputValue.length === 0}
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
}

export default AddFolderForm;
