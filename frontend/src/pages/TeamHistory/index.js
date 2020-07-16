import React, { useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

import TeamNavbar from '../../components/TeamNavbar'

//import verifyAuthorization from '../../utils/verifyAuthorization';

import './styles.css';
import logo from '../../assets/logo.png'

export default function TeamHistory() {
  //const history = useHistory();

  useEffect(() => {
    document.title = 'Dashboard - EIFChar';
  });

  return (
    <div className="history-container">
      <TeamNavbar />

      <section className="history-body">
        <img src={logo} alt="EIFChar" />
      </section>
    </div>
  );
}