import React, { useState, useEffect } from 'react';

import RotboxAPI from '../services/api';
import FilesCSS from '../css/Files.module.css';

function downloadFile(fileId, filename) {
  (RotboxAPI.downloadFile(fileId)).then((blob) => {
    const blobUrl = window.URL.createObjectURL(blob.data);
    const a = document.createElement('a');

    a.href = blobUrl;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(blobUrl);
  });
}

function Files() {
  const [files, setFilesList] = useState([]);

  useEffect(() => {
    RotboxAPI.getFiles().then((response) => {
      setFilesList(response.data.files);
    });
  }, []);

  return (
    <section>
      <h2 className={FilesCSS.title}>Your Files</h2>
      <hr className={FilesCSS.rule} />
      {!files.length && <p className={FilesCSS.msg}>You do not have any files stored</p>}
      <ul className={FilesCSS.list}>
        {
          files.map(file => <li key={file._id}>
              <h3>{file.name}</h3>
              { (file.isFile) ?
              <button type="button" onClick={() => downloadFile(file._id, file.name)}>Download</button> :
              <p>{file.content}</p>}
          </li>)
        }
      </ul>
    </section>
  );
}

export default Files;