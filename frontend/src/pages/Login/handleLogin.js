import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';

export default async function handleLogin(user, password) {
  try {
    if (user === '' || password === '' ||
      user === undefined || password === undefined) throw new Error('MISSINGDATA');
    else if (password.length < 8) throw new Error('WRONGPASSWORD');

    await api.post('login', {
      user,
      password
    }).then(response => {
      localStorage.setItem('user', user);
      localStorage.setItem('authorization', response.data.authorization);
    });

    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}