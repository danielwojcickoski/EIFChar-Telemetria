import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import validateData from '../../utils/validateData'

export default async function makeRegister(user, email, password, confirmPassword) {
  try {
    let validateUser = validateData.user(user);
    let validateEmail = validateData.user(email);
    let validatePassword = validateData.user(password);
    let validateConfirmation = validateData.user(confirmPassword);

    if (validateUser !== true) throw new Error(validateUser);
    if (validateEmail !== true) throw new Error(validateEmail);
    if (validatePassword !== true) throw new Error(validatePassword);
    if (validateConfirmation !== true) throw new Error(validateConfirmation);

    await api.post('/logon/register', { user, email, password });

    alert('Cadastro realizado com sucesso');
    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}