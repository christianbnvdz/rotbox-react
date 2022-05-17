import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormsCSS from '../css/Forms.module.css';
import { IsLoggedInContext } from '../components/App';
import RotboxAPI from '../services/api';
import Storage from '../services/storage';

function Login() {
  const navigate = useNavigate();
  const [user, setUserValues] = useState({ username: '', password: '' });
  const [error, setErrorMsg] = useState('');
  const isLoggedInContext = useContext(IsLoggedInContext);

  function login(username, password) {
    (RotboxAPI.login(username, password)).then((response) => {
      Storage.setUserId(response.data.userid);
      Storage.setUserToken(response.data.token);
      isLoggedInContext.setLoggedInStatus(true);
      navigate("/files");
    }).catch((response) => {
      setErrorMsg(response.response.data.msg);
    });
  }

  function updateUserValues(event) {
    (event.target.id === 'username') ?
      setUserValues({ username: event.target.value, password: user.password }) :
      setUserValues({ username: user.username, password: event.target.value });
  }
  
  return (
    <section>
      <h1 className={FormsCSS.title}>Log In</h1>
      <p className={`${FormsCSS.msg} ${FormsCSS.error}`}>{error}</p>
      <form className={FormsCSS.form}>
        <div className={FormsCSS.form_item}>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" value={user.username} onChange={updateUserValues} required />
        </div>
        <div className={FormsCSS.form_item}>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={user.password} onChange={updateUserValues} required />
        </div>
        <button className={FormsCSS.form_item} type="button" onClick={() => login(user.username, user.password)}>Log In</button>
      </form>
    </section>
  );
}

export default Login;