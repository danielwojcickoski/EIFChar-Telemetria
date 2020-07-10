import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import validateData from '../../utils/validateData'

export default async function handleLogin(user, password) {
  try {
    let validateUser = validateData.user(user);
    let validatePassword = validateData.user(password);

    if (validateUser !== true) throw new Error(validateUser);
    if (validatePassword !== true) throw new Error(validatePassword);

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