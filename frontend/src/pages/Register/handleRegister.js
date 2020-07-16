import api from '../../services/api';
import errorAlert from '../../utils/errorAlert';
import { 
  userValidation, 
  emailValidation, 
  passwordValidation, 
  passwordConfirmValidation 
} from '../../utils/validateData'

export default async function makeRegister(user, email, password, confirmPassword) {
  try {
    let validateUser = userValidation(user);
    let validateEmail = emailValidation(email);
    let validatePassword = passwordValidation(password);
    let validateConfirmation = passwordConfirmValidation(password, confirmPassword);

    if (validateUser !== true) throw new Error(validateUser);
    if (validateEmail !== true) throw new Error(validateEmail);
    if (validatePassword !== true) throw new Error(validatePassword);
    if (validateConfirmation !== true) throw new Error(validateConfirmation);

    await api.post('/register', { user, email, password });

    alert('Cadastro realizado com sucesso');
    return true;
  } catch (Error) {
    errorAlert(Error);
    return false;
  }
}