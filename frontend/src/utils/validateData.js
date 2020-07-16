function userValidation(user) {
    if (user === '' || user === undefined) return 'MISSINGDATA';

    return true;
}

function emailValidation(email) {
    if (email === '' || email === undefined) return 'MISSINGDATA';

    var indexAt = email.indexOf('@');
    if (indexAt < 1 || email[indexAt + 1] === undefined) return 'INVALIDEMAIL';

    var indexPoint = -1;
    for (var count = indexAt + 1; count < email.length; count++) {
        if (email[count] === '.') {
            indexPoint = count;
            break;
        }
    }

    if (indexPoint < (indexAt + 1) || email[indexPoint + 1] === undefined) return 'INVALIDEMAIL';

    return true;
}

function passwordValidation(password) {
    if (password === '' || password === undefined) return 'MISSINGDATA';
    if (password.length < 8) return 'SHORTPASSWORD';

    return true;
}

function passwordConfirmValidation(password, confirmation) {
    let passwordVerify = passwordValidation(password);
    if (passwordVerify !== true) return passwordVerify;

    if (password !== confirmation) return 'CONFIRMPASSWORRDERROR';

    return true;
}

function accountTypeValidation(accountType) {
    if (accountType === '' || accountType === undefined) return 'MISSINGDATA';

    return true;
}

export default function validateData(user, email, password, confirmPassword, accountType){
    let returns = [];

    if (user !== false){
        returns[0] = userValidation(user);
        if(returns[0] !== true) return returns[0];
    }

    if (email !== false){
        returns[1] = emailValidation(email);
        if(returns[1] !== true) return returns[1];
    }

    if (password !== false){
        returns[2] = passwordValidation(password);
        if(returns[2] !== true) return returns[2];
    }
        
    if (confirmPassword !== false){
        returns[3] = passwordConfirmValidation(password, confirmPassword);
        if(returns[3] !== true) return returns[3];
    }
    
    if (accountType !== false){
        returns[4] = accountTypeValidation(accountType);
        if(returns[4] !== true) return returns[4];
    }

    return true;
}