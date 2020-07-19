import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import TeamNavbar from '../../components/TeamNavbar'

//import verifyAuthorization from '../../utils/verifyAuthorization';
import verifyStorageData from '../../utils/verifyStorageData';

import './styles.css';
import logo from '../../assets/logo.png'

export default function TeamHistory() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'Dashboard - EIFChar';

    if(verifyStorageData() !== true){
      localStorage.clear();
      history.push('/login');
    }
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