import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Homepage() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'EIFChar';
    history.push('/login');
  });

  return (
    <p>Redirecting</p>
  );
}