import React from 'react';

import './index.css';

interface AddButtonComponentProps {
  expanded: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AddButton(props: AddButtonComponentProps) {
  const { expanded, onClick } = props;

  return (
    <span className="add title__button">
      <button type="button" className="add__button" onClick={onClick}>
        {expanded ? '\u2296' : '\u2295'}
      </button>
    </span>
  );
}

export default AddButton;
