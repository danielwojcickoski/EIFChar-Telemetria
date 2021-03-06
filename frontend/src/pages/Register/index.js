import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import handleRegister from './handleRegister'

import './styles.css'
import logo from '../../assets/logo.png'

export default function Register() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');

  useEffect(() => {
    document.title = 'Cadastro - EIFChar';
  });

  async function makeRegister(e) {
    e.preventDefault();

    if (await handleRegister(user, email, password, confirmPassword, accountType)) {
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
            type="password"
          />
          <input
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
          />  

          <select
            value={accountType}
            onChange={e => setAccountType(e.target.value)}
          >
            <option value="" disabled>Selecione o tipo de cadastro</option>
            <option value="team">Equipe</option>
            <option value="user">Usuario</option>
          </select>

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