import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import validateData from '../../utils/validateData';

export default async function handleLogin(user, password) {
  try {
    let validateDataReturn = validateData(user, false, password, false, false);
    if (validateDataReturn !== true) throw new Error(validateDataReturn);

    await api.post('login', {
      user,
      password
    }).then(response => {
      localStorage.setItem('user', user);
      localStorage.setItem('authorization', response.data.authorization);
      localStorage.setItem('accountType', response.data.accountType);
    });

    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}