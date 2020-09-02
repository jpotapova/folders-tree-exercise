import React from 'react';
import './App.css';

export interface FolderProps {
  title: string;
  children?: Array<FolderProps>;
}

function Folder(props: FolderProps) {
  return (
    <div className="folder">
      <div className="title">{props.title}</div>
      <div className="children">
        {props.children?.map((childFolder: FolderProps) => (
          <Folder title={childFolder.title} key={childFolder.title} />
        ))}
      </div>
    </div>
  );
}

export default Folder;
