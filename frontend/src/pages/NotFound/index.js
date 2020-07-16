import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import verifyAuthorization from '../../utils/verifyAuthorization';

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'EIFChar';
    history.push('/');
  });

  return (
    <p>Redirecting</p>
  );
}