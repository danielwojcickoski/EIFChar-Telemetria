import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import verifyAuthorization from '../../utils/verifyAuthorization';
import handleRegister from './handleRegister'

import './styles.css'
import logo from '../../assets/logo.png'

export default function Register() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.title = 'Cadastro - EIFChar Telemetria';
    async function verifyAuth() {
      if (await verifyAuthorization()) {
        history.push('/home');
      }
    }
    verifyAuth();
  });

  async function makeRegister(e) {
    e.preventDefault();

    if (await handleRegister(user, email, password, confirmPassword)) {
      history.push('/login');
    }
  }

  return (
    <div className="register-container">
      <section className="form">
        <img src={logo} alt="EIFChar" />

        <form onSubmit={makeRegister}>
          <input
            placeholder="Usuario"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>

          <Link className="back-link" to="/login">
            <FiLogIn size={16} color="#41414d" />
              Já tenho cadastro
            </Link>
        </form>
      </section>
    </div>
  );
}