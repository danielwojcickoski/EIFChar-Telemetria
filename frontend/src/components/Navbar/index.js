import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png'

export default function Navbar() {
  const history = useHistory();

  function handleLogout(){
    /*Limpar localstorage*/

    history.push('/');
  }

  return (
    <div className="navbar">
      <img src={logo} alt="EIFChar" />

      <nav>
        <Link className="back-link navbar-link" to="/dashboard">
          Dashboard
          </Link>

        <Link className="back-link navbar-link" to="/history">
          Histórico
          </Link>

        <button className="navbar-button" onClick={handleLogout}>
          <FiPower size={16} color="#41414d" />
        </button>
      </nav>
    </div>
  );
}