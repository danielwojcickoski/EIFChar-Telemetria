import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import validateData from '../../utils/validateData';

export default async function makeRegister(user, email, password, confirmPassword, accountType) {
  try {
    let validateDataReturn = validateData(user, email, password, confirmPassword, accountType);
    if (validateDataReturn !== true) throw new Error(validateDataReturn);

    console.log("revdsvfdsv")

    await api.post('/register', { user, email, password, accountType });

    alert('Cadastro realizado com sucesso');
    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}