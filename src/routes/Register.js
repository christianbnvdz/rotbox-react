import React, { useState } from 'react';

import FormsCSS from '../css/Forms.module.css';
import RotboxAPI from '../services/api';

function Register() {
  const [msg, setMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [user, setUserValues] = useState({ username: '', password: '' });

  function register(username, password) {
    (RotboxAPI.register(username, password)).then((response) => {
      setMsg('Registered Succesfully');
      setErrMsg('');
    }).catch((response) => {
      setMsg('');
      setErrMsg(response.response.data.msg);
    });
  }

  function updateUserValues(event) {
    (event.target.id === 'username') ?
      setUserValues({ username: event.target.value, password: user.password }) :
      setUserValues({ username: user.username, password: event.target.value });
  }

  return (
    <section>
      <h2 className={FormsCSS.title}>Register an Account</h2>
      <p className={`${FormsCSS.msg} ${FormsCSS.success}`}>{msg}</p>
      <p className={`${FormsCSS.msg} ${FormsCSS.error}`}>{errMsg}</p>
      <form className={FormsCSS.form}>
        <div className={FormsCSS.form_item}>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" value={user.username} onChange={updateUserValues} required />
        </div>
        <div className={FormsCSS.form_item}>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={user.password} onChange={updateUserValues} required />
        </div>
        <button className={FormsCSS.form_item} type="button" onClick={() => register(user.username, user.password)}>Register</button>
      </form>
    </section>
  );
}

export default Register;