import React from 'react';
import './App.css';

export interface FolderProps {
  title: string;
  children?: Array<FolderProps>;
  onClick?: any;
}

function Folder(props: FolderProps) {
  return (
    <div className="folder">
      <div className="title">
        {props.title}{' '}
        <button
          type="button"
          onClick={() => {
            props.onClick(props.title);
          }}
        >
          +
        </button>
      </div>
      <div className="children">
        {props.children?.map((childFolder: FolderProps) => (
          <Folder
            title={childFolder.title}
            children={childFolder.children}
            key={childFolder.title}
            onClick={props.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
