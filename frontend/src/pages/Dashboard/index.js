import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar'

import verifyAuthorization from '../../utils/verifyAuthorization';

import './styles.css';
import './emit-events.css';
import './read-events.css';

export default function Login() {
  /*Use history*/
  const history = useHistory();

  /*Force update*/
  const [update, setUpdate] = useState(0);
  function forceUpdate(){
    setUpdate(update+1);
  }

  /*Emit data*/
  const [emitData, setEmitData] = useState({
    lightSignal: {
      led1: {
        action: 'nothing',
        color: 'off',
      },
      led2: {
        action: 'nothing',
        color: 'off',
      },
      led3: {
        action: 'nothing',
        color: 'off',
      }
    },
    soundSignal: {
      action: 'nothing',
      onTime: 'off',
      offTime: 'off',
      repeat: 'off',
    },
    message: '',
  });

  /*Read data*/
  const [readData, setReadData] = useState({
    currentTime: "00:00",
    currentSpeed: '0',
    batteryVoltage: '0',
    currentAmpere: '0',
    currentConsume: '0',
    totalConsumeW: '0',
    totalConsumeJ: '0',
    estimatedBattery: '0',
    powerTemperature: '0',
    laps: '0',
    routePercentage: '0',
    statusLasMessage: "Nada enviado",
    statusApp: "Não conectado ao servidor",
  });

  /*Verify authorization when page load*/
  useEffect(() => {
    document.title = 'Dashboard - EIFChar';
    async function verifyAuth() {
      if (await !verifyAuthorization()) {
        localStorage.clear();
        history.push('/login');
      }
    }
    verifyAuth();
  });

  /*Emit data panel*/
  function sendData(e) {
    e.preventDefault();

    console.log(emitData);

    setReadData(readData);
    forceUpdate();
  }

  /*Read data panel*/

  /*Html*/
  return (
    <div className="dashboard-container">
      <Navbar />

      <section className="dashboard-body">
        <section className="emit-events">
          <form className="emit-itens-div" onSubmit={sendData}>
            <div className="light-signal-div">
              <h1>Sinal Luminoso</h1>

              <div className="light-signal-options">
                <div className="light-signal-option">
                  <p>Led 1:</p>
                  <select
                    value={emitData.lightSignal.led1.action}
                    onChange={e => {
                      const newAction = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led1.action = newAction;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="nothing" disabled>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select
                    value={emitData.lightSignal.led1.color}
                    onChange={e => {
                      const newColor = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led1.color = newColor;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="off" disabled>Cor</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarelo</option>
                    <option value="red">Vermelho</option>
                  </select>
                </div>

                <div className="light-signal-option">
                  <p>Led 2:</p>
                  <select
                    value={emitData.lightSignal.led2.action}
                    onChange={e => {
                      const newAction = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led2.action = newAction;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="nothing" disabled>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select
                    value={emitData.lightSignal.led2.color}
                    onChange={e => {
                      const newColor = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led2.color = newColor;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="off" disabled >Cor</option>
                    <option value="green">Verde</option>
                    <option value="yellow">Amarelo</option>
                    <option value="red">Vermelho</option>
                  </select>
                </div>

                <div className="light-signal-option">
                  <p>Led 3:</p>
                  <select
                    value={emitData.lightSignal.led3.action}
                    onChange={e => {
                      const newAction = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led3.action = newAction;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="nothing" disabled>Ação</option>
                    <option value="on">Ligar</option>
                    <option value="off">Desligar</option>
                  </select>
                  <select
                    value={emitData.lightSignal.led3.color}
                    onChange={e => {
                      const newColor = e.target.value;
                      const newLightSignal = emitData.lightSignal;
                      newLightSignal.led3.color = newColor;

                      setEmitData(prevState => {
                        return {
                          ...prevState,
                          lightSignal: newLightSignal
                        }
                      })
                    }}
                  >
                    <option value="off" disabled>Cor</option>
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
                <select
                  value={emitData.soundSignal.action}
                  onChange={e => {
                    const newAction = e.target.value;
                    const newSoundSignal = emitData.soundSignal;
                    newSoundSignal.action = newAction;

                    setEmitData(prevState => {
                      return {
                        ...prevState,
                        soundSignal: newSoundSignal
                      }
                    })
                  }}
                >
                  <option value="nothing" disabled>Ação</option>
                  <option value="on">Ligar</option>
                  <option value="off">Desligar</option>
                </select>
                <select
                  value={emitData.soundSignal.onTime}
                  onChange={e => {
                    const newTime = e.target.value;
                    const newSoundSignal = emitData.soundSignal;
                    newSoundSignal.onTime = newTime;

                    setEmitData(prevState => {
                      return {
                        ...prevState,
                        soundSignal: newSoundSignal
                      }
                    })
                  }}
                >
                  <option value="off" disabled>Tempo ON</option>
                  <option value="0">0s</option>
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
                <select
                  value={emitData.soundSignal.offTime}
                  onChange={e => {
                    const newTime = e.target.value;
                    const newSoundSignal = emitData.soundSignal;
                    newSoundSignal.offTime = newTime;

                    setEmitData(prevState => {
                      return {
                        ...prevState,
                        soundSignal: newSoundSignal
                      }
                    })
                  }}
                >
                  <option value="off" disabled>Tempo OFF</option>
                  <option value="0">0s</option>
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
                <select
                  value={emitData.soundSignal.repeat}
                  onChange={e => {
                    const newRepeat = e.target.value;
                    const newSoundSignal = emitData.soundSignal;
                    newSoundSignal.repeat = newRepeat;

                    setEmitData(prevState => {
                      return {
                        ...prevState,
                        soundSignal: newSoundSignal
                      }
                    })
                  }}
                >
                  <option value="off" disabled>Repetições</option>
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

              <textarea
                placeholder="Digite aqui uma mensagem"
                value={emitData.message}
                onChange={e => {
                  const newMessage = e.target.value;
                  setEmitData(prevState => {
                    return {
                      ...prevState,
                      message: newMessage
                    }
                  })
                }}
                className="message-input"
              />
            </div>

            <div className="button-div">
              <button className="button" type="submit">Enviar</button>
            </div>
          </form>

          <div className="status-div">
              <p><strong>Status Ultima Mensagem:</strong>  {readData.statusLasMessage}</p>
          </div>
        </section>

        <span></span>

        <section className="read-events" key="10">
          <div className="read-itens-div">
            <div className="main-infos-div">
              <div className="last-message-time-div">
                <h1>Horario ultimas infos:</h1>
                <h2>{readData.currentTime}</h2>
              </div>
              <div className="speed-div">
                <h1>Velocidade atual: (km/h)</h1>
                <h2 size="4">{readData.currentSpeed}</h2>
              </div>
              <div className="battery-voltage-div">
                <h1>Tensão da bateria: (V)</h1>
                <h2>{readData.batteryVoltage}</h2>
              </div>
            </div>

            <div className="infos-table-div">
              <table>
                <tbody>
                  <tr>
                    <td><h1>Corrente elétrica</h1></td>
                    <td>{readData.currentAmpere}</td>
                    <td>A</td>
                  </tr>
                  <tr>
                    <td><h1>Consumo atual</h1></td>
                    <td>{readData.currentConsume}</td>
                    <td>W</td>
                  </tr>
                  <tr>
                    <td><h1>Consumo desde o início da bateria</h1></td>
                    <td>{readData.totalConsumeW}</td>
                    <td>kWh</td>
                  </tr>
                  <tr>
                    <td><h1>Consumo desde o início da bateria</h1></td>
                    <td>{readData.totalConsumeJ}</td>
                    <td>Joules</td>
                  </tr>
                  <tr>
                    <td><h1>Porcentagem estimada da bateria</h1></td>
                    <td>{readData.estimatedBattery}</td>
                    <td>%</td>
                  </tr>
                  <tr>
                    <td><h1>Temperatura do circuito de potência</h1></td>
                    <td>{readData.powerTemperature}</td>
                    <td>°C</td>
                  </tr>
                  <tr>
                    <td><h1>Número de voltas</h1></td>
                    <td>{readData.laps}</td>
                    <td>voltas</td>
                  </tr>
                  <tr>
                    <td><h1>Porcentagem do percurso</h1></td>
                    <td>{readData.routePercentage}</td>
                    <td>%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="status-div">
            <p><strong>Status Aplicativo:</strong>   {readData.statusApp}</p>
          </div>
        </section>
      </section>
    </div >
  );
}