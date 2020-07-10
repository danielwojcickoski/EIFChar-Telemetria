import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import validateEmail from '../../utils/validateEmail';

export default async function makeRegister(user, email, password, confirmPassword) {
  try {
    if (user === '' || email === '' || password === '' || confirmPassword === '' ||
      user === undefined || email === undefined || password === undefined || confirmPassword === undefined) throw new Error('MISSINGDATA');
    else if (password.length < 8) throw new Error('SHORTPASSWORD');
    else if (password !== confirmPassword) throw new Error('CONFIRMPASSWORRDERROR');
    else if (validateEmail(email) === false) throw new Error('INVALIDEMAIL');

    await api.post('/logon/register', { user, email, password });

    alert('Cadastro realizado com sucesso');
    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}