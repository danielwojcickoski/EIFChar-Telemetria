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
    <div className="dashboard-container">
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

      <section className="dashboard-body">
        <section className="emit-events">
          <div className="light-signal-div">
            <h1>Sinal Luminoso</h1>

            <div className="light-signal-options">
              <div className="light-signal-option">
                <p>Led 1:</p>
                <select>
                  <option value="" disabled selected>Ação</option>
                  <option value="on">Ligar</option>
                  <option value="off">Desligar</option>
                </select>
                <select>
                  <option value="" disabled selected>Cor</option>
                  <option>Verde</option>
                  <option>Amarelo</option>
                  <option>Vermelho</option>
                </select>
              </div>

              <div className="light-signal-option">
                <p>Led 2:</p>
                <select>
                  <option value="" disabled selected>Ação</option>
                  <option value="on">Ligar</option>
                  <option value="off">Desligar</option>
                </select>
                <select>
                  <option value="" disabled selected>Cor</option>
                  <option>Verde</option>
                  <option>Amarelo</option>
                  <option>Vermelho</option>
                </select>
              </div>

              <div className="light-signal-option">
                <p>Led 3:</p>
                <select>
                  <option value="" disabled selected>Ação</option>
                  <option value="on">Ligar</option>
                  <option value="off">Desligar</option>
                </select>
                <select>
                  <option value="" disabled selected>Cor</option>
                  <option>Verde</option>
                  <option>Amarelo</option>
                  <option>Vermelho</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sound-signal-div">.
            <h1>Sinal Sonoro</h1>

            <div className="sound-signal-option">
              <select>
                <option value="" disabled selected>Ação</option>
                <option value="on">Ligar</option>
                <option value="off">Desligar</option>
              </select>
              <select>
                <option value="" disabled selected>Tempo ON</option>
                <option value="0.5">0.5s</option>
                <option value="1">1s</option>
                <option value="1.5">1.5s</option>
                <option value="2">2s</option>
                <option value="2.5">2.5s</option>
                <option value="3">3s</option>
                <option value="3.5">3.5s</option>
                <option value="4">4s</option>
                <option value="4.5">4.5s</option>
                <option value="5">5s</option>
                <option value="5.5">5.5s</option>
                <option value="6">6s</option>
                <option value="6.5">6.5s</option>
                <option value="7">7s</option>
                <option value="7.5">7.5s</option>
                <option value="8">8s</option>
                <option value="8.5">8.5s</option>
                <option value="9">9s</option>
                <option value="9.5">9.5s</option>
                <option value="10">10s</option>
              </select>
              <select>
                <option value="" disabled selected>Tempo OFF</option>
                <option value="0.5">0.5s</option>
                <option value="1">1s</option>
                <option value="1.5">1.5s</option>
                <option value="2">2s</option>
                <option value="2.5">2.5s</option>
                <option value="3">3s</option>
                <option value="3.5">3.5s</option>
                <option value="4">4s</option>
                <option value="4.5">4.5s</option>
                <option value="5">5s</option>
                <option value="5.5">5.5s</option>
                <option value="6">6s</option>
                <option value="6.5">6.5s</option>
                <option value="7">7s</option>
                <option value="7.5">7.5s</option>
                <option value="8">8s</option>
                <option value="8.5">8.5s</option>
                <option value="9">9s</option>
                <option value="9.5">9.5s</option>
                <option value="10">10s</option>
              </select>
              <select>
                <option value="" disabled selected>Repetições</option>
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
                <option value="4">4x</option>
                <option value="5">5x</option>
              </select>
            </div>
          </div>

          <div className="message-div">
            <h1>Mensagem</h1>

            <input 
              placeholder="Digite aqui uma mensagem para o piloto"
              className="message-input"
            />
          </div>

          <button className="button">Enviar</button>
 
          <div className="status-div">
            <p><strong>Status Ultima Mensagem:</strong>  Nada enviado</p>
          </div>
        </section>

        <span></span>

        <section className="read-events">

        </section>
      </section>
    </div>
  );
}