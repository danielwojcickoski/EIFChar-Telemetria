import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import verifyAuthorization from '../../utils/verifyAuthorization';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'EIFChar';
    async function verifyAuth() {
      if (await verifyAuthorization()) {
        history.push('/dashboard');
      }
      else{
        history.push('/');
      }
    }
    verifyAuth();
  });

  return (
    <p>Redirecting</p>
  );
}