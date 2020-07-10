import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import verifyAuthorization from '../../utils/verifyAuthorization';

import './styles.css';
import logo from '../../assets/logo.png'

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Dashboard - EIFChar';
    async function verifyAuth() {
      if (await !verifyAuthorization()) {
        return false;
      }
      history.push('/dashboard');
    }
    verifyAuth();
  });

  return (
    <div className="history-container">
      <section className="navbar">
        <img src={logo} alt="EIFChar" />

        <nav>
          <Link className="back-link navbar-link" to="/dashboard">
            Dashboard
          </Link>

          <Link className="back-link navbar-link" to="/history">
            Histórico
          </Link>

          <button className="navbar-button">
            <FiPower size={16} color="#41414d" />
          </button>
        </nav>
      </section>

      <img src={logo} alt="EIFChar" />
    </div>
  );
}