import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdCreate } from 'react-icons/md';

import handleLogin from './handleLogin'

import './styles.css';
import logo from '../../assets/logo.png'

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Login - EIFChar';
  });

  async function makeLogin(e) {
    e.preventDefault();

    if (await handleLogin(user, password)) {
      if(localStorage.getItem('accountType') === 'team'){
        history.push('/team/dashboard');
      }
      else if(localStorage.getItem('accountType') === 'user'){
        history.push('/user/dashboard');
      }
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="EIFChar" />

        <form onSubmit={makeLogin}>
          <input
            placeholder="Usuario"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <MdCreate size={16} color="#41414d" />
              Não tenho cadastro
            </Link>
        </form>
      </section>
    </div>
  );
}