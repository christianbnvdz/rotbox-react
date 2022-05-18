import React, { useState } from 'react';

import RotboxAPI from '../services/api';
import FormsCSS from '../css/Forms.module.css';

function Upload() {
  const [upload, setUploadValues] = useState({ name: '', isFile: false, content: '', file: null });
  const [msg, setMsg] = useState('');
  
  function updateUploadValues(event) {
    switch (event.target.id) {
      case 'name':
        setUploadValues({ ...upload, name: event.target.value });
        break;
      case 'fileType':
        (event.target.checked) ? // are we uploading a file?
        setUploadValues({ ...upload, isFile: true, content: '' }) :
        setUploadValues({ ...upload, isFile: false, file: null });
        console.log(upload);
        break;
      case 'textbox':
        setUploadValues({ ...upload, content: event.target.value });
        break;
      case 'fileSelect':
        setUploadValues({ ...upload, file: event.target.files[0] });
        break;
      default:
        console.log('An error occured.');
    }
  }

  function uploadFile() {
    const form = new FormData();
    form.append('name', upload.name);
    form.append('isFile', upload.isFile.toString());
    form.append('content', (upload.isFile) ? upload.file : upload.content);

    (RotboxAPI.uploadFile(form)).then((response) => {
      setUploadValues({ name: '', isFile: false, content: '', file: null });
      setMsg('File Upload Successful!');
    }).catch((response) => {
      setMsg(response.response.data);
    });
  }

  return (
    <section>
      <h2 className={FormsCSS.title}>Upload</h2>
      <hr className={FormsCSS.rule} />
      <form className={FormsCSS.form}>
        <div className={FormsCSS.form_item}>
          <label htmlFor="name">Upload Name</label>
          <input value={upload.name} onChange={updateUploadValues} type="text" id="name" name="name" required />
        </div>
        <div className={FormsCSS.form_item}>
          <label htmlFor="fileType">Uploading a File?</label>
          <input checked={upload.isFile} onChange={updateUploadValues} type="checkbox" id="fileType" name="isFile" required />
        </div>
        <div className={FormsCSS.form_item}>
          {
            (upload.isFile) ?
             <>
              <label className={FormsCSS.block_label} htmlFor="fileSelect">Choose a File</label>
              <input className={FormsCSS.file_select} type="file" onChange={updateUploadValues} id="fileSelect" name="content" required />
             </> :
             <>
              <label className={FormsCSS.block_label} htmlFor="textbox">Your Text</label>
              <textarea value={upload.content} onChange={updateUploadValues} id="textbox" name="content" required></textarea>
             </>
          }
        </div>
        <button className={FormsCSS.form_item} onClick={uploadFile} type="button">Upload</button>
      </form>
      <p className={FormsCSS.msg_bottom}>{msg}</p>
    </section>
  );
}

export default Upload;