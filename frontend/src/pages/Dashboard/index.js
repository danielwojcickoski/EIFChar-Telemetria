import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar'

import verifyAuthorization from '../../utils/verifyAuthorization';

import './styles.css';
import './emit-events.css';
import './read-events.css';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Dashboard - EIFChar';
    async function verifyAuth() {
      if (await !verifyAuthorization()) {
        return false;
      }
      history.push('/login');
    }
    verifyAuth();
  });

  return (
    <div className="dashboard-container">
      <Navbar />

      <section className="dashboard-body">
        <section className="emit-events">
          <div className="emit-itens-div">
            <div className="light-signal-div">
              <h1>Sinal Luminoso</h1>

              <div className="light-signal-options">
                <div className="light-signal-option">
                  <p>Led 1:</p>
                  <select>
                    <option value="off" disabled selected>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select>
                    <option value="off" disabled selected>Cor</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarelo</option>
                    <option value="red">Vermelho</option>
                  </select>
                </div>
                
                <div className="light-signal-option">
                  <p>Led 2:</p>
                  <select>
                    <option value="off" disabled selected>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select>
                    <option value="off" disabled selected>Cor</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarelo</option>
                    <option value="red">Vermelho</option>
                  </select>
                </div>

                <div className="light-signal-option">
                  <p>Led 3:</p>
                  <select>
                    <option value="off" disabled selected>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select>
                    <option value="off" disabled selected>Cor</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarelo</option>
                    <option value="red">Vermelho</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sound-signal-div">
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
                  <option value="0">Não repetir</option>
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

            <div className="button-div">
              <button className="button">Enviar</button>
            </div>
          </div>

          <div className="status-div">
            <p><strong>Status Ultima Mensagem:</strong>  Nada enviado</p>
          </div>
        </section>

        <span></span>

        <section className="read-events">
          <div className="read-itens-div">
            <div className="main-infos-div">
              <div className="last-message-time-div">
                <h1>Horario ultimas infos:</h1>
                <h2>00:00</h2>
              </div>
              <div className="speed-div">
                <h1>Velocidade atual: (km/h)</h1>
                <h2>00.00</h2>
              </div>
              <div className="battery-voltage-div">
                <h1>Tensão da bateria: (V)</h1>
                <h2>00.00</h2>
              </div>
            </div>

            <div className="infos-table-div">
              <table>
                <tr>
                  <td><h1>Corrente elétrica</h1></td>
                  <td>0</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td><h1>Consumo atual</h1></td>
                  <td>0</td>
                  <td>W</td>
                </tr>
                <tr>
                  <td><h1>Consumo desde o início da bateria</h1></td>
                  <td>0</td>
                  <td>kWh</td>
                </tr>
                <tr>
                  <td><h1>Consumo desde o início da bateria</h1></td>
                  <td>0</td>
                  <td>Joules</td>
                </tr>
                <tr>
                  <td><h1>Porcentagem estimada da bateria</h1></td>
                  <td>0</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td><h1>Temperatura do circuito de potência</h1></td>
                  <td>0</td>
                  <td>°C</td>
                </tr>
                <tr>
                  <td><h1>Número de voltas</h1></td>
                  <td>0</td>
                  <td>voltas</td>
                </tr>
                <tr>
                  <td><h1>Porcentagem do percurso</h1></td>
                  <td>0</td>
                  <td>%</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="status-div">
            <p><strong>Status Aplicativo:</strong>  Não conectado ao servidor</p>
          </div>
        </section>
      </section>
    </div>
  );
}