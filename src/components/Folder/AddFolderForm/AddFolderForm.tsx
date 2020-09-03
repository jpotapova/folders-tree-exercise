import React, { useState, useEffect } from 'react';

import './index.css';

interface AddFolderFormComponentProps {
  show: boolean;
}

function AddFolderForm(props: AddFolderFormComponentProps) {
  const { show } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue('');
  }, [show]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="add-folder">
      <span className="add-folder__relation">&#9492;</span>
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
  );
}

export default AddFolderForm;
