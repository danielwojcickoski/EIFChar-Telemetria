const database = require('../database/connection');

const generateAuthorization = require('../utils/generateAuthorization');
const validateData = require('../utils/validateData');
const { accountType } = require('../utils/validateData');

module.exports = {
    async login(request, response) {
        const { user, password } = request.body;
        let validateUser = validateData.user(user);
        let validatePassword = validateData.password(password);

        if (validateUser !== true) return response.status(400).json({ error: validateUser });
        if (validatePassword !== true) return response.status(400).json({ error: validatePassword });

        const bdUser = await database('users')
            .where('user', user)
            .select('*')
            .first();

        console.log(bdUser)

        if (bdUser !== undefined) {
            if (bdUser.user === user) {
                if (bdUser.password === password) {
                    console.log(`User ${user} logged in`);

                    const authorization = generateAuthorization();
                    await database('users')
                        .where('user', user)
                        .update({ authorization: authorization })

                    return response.status(200).json({ 
                        authorization: authorization,
                        accountType: bdUser.accountType
                    });
                }
                else {
                    return response.status(400).json({ error: 'WRONGPASSWORD' });
                }
            }
            else {
                return response.status(400).json({ error: 'USERNOTFOUND' });
            }
        }

        return response.status(400).json({ error: 'USERNOTFOUND' });
    },
    async register(request, response) {
        const { user, email, password, accountType } = request.body;
        let validateUser = validateData.user(user);
        let validateEmail = validateData.email(email);
        let validatePassword = validateData.password(password);
        let validateAccountType = validateData.accountType(accountType);

        if (validateUser !== true) return response.status(400).json({ error: validateUser });
        if (validateEmail !== true) return response.status(400).json({ error: validateEmail });
        if (validatePassword !== true) return response.status(400).json({ error: validatePassword });
        if (validateAccountType !== true) return response.status(400).json({ error: validateAccountType });

        /*Verify user already used*/
        const bdUser = await database('users')
            .where('user', user)
            .select('user')
            .first();
        if (bdUser !== undefined)
            if (bdUser.user === user)
                return response.status(400).json({ error: 'USERALREADYUSED' });

        /*Verify email already used*/
        const bdEmail = await database('users')
            .where('email', email)
            .select('email')
            .first();
        if (bdEmail !== undefined)
            if (bdEmail.email === email)
                return response.status(400).json({ error: 'EMAILALREADYUSED' });

        /*Generate initial authorization*/
        const authorization = generateAuthorization();

        /*Insert user in database*/
        await database('users').insert({
            user,
            email,
            password,
            authorization,
            accountType,
            socketWeb: authorization,
            socketApp: authorization,
        });

        /*Generate register log*/
        console.log(`User ${user} registered`);

        /*Return Ok*/
        return response.status(204).send();
    },
    async verifyauth(request, response) {
        const { user, authorization } = request.body;

        const bdUser = await database('users')
            .where('user', user)
            .select('*')
            .first();

        if (bdUser !== undefined) {
            if (bdUser.user === user) {
                if (bdUser.authorization === authorization) {
                    console.log(`User ${user} verified`);

                    return response.status(204);
                }
                else {
                    return response.status(400);
                }
            }
            else {
                return response.status(400);
            }
        }
    }
}