export function userValidation(user) {
    if (user === '' || user === undefined) return 'MISSINGDATA';

    return true;
}

export function emailValidation(email) {
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

export function passwordValidation(password) {
    if (password === '' || password === undefined) return 'MISSINGDATA';
    if (password.length < 8) return 'SHORTPASSWORD';

    return true;
}

export function passwordConfirmValidation(password, confirmation) {
    let passwordVerify = passwordValidation(password);
    if (passwordVerify !== true) return passwordVerify;

    if (password !== confirmation) return 'CONFIRMPASSWORRDERROR';

    return true;
}