import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar'

import verifyAuthorization from '../../utils/verifyAuthorization';

import './styles.css';
import logo from '../../assets/logo.png'

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Dashboard - EIFChar';
    async function verifyAuth() {
      if (await verifyAuthorization()) {
        localStorage.clear();
        history.push('/login');
      }
    }
    verifyAuth();
  });

  return (
    <div className="history-container">
      <Navbar />

      <section className="history-body">
        <img src={logo} alt="EIFChar" />
      </section>
    </div>
  );
}