import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();

  useEffect(() => {
    document.title = 'EIFChar';
    history.push('/');
  });

  return (
    <p>Redirecting</p>
  );
}