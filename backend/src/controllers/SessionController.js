const database = require('../database/connection');

const generateAuthorization = require('../utils/generateAuthorization');

module.exports = {
    async login(request, response) {
        const { user, password } = request.body;

        const bdUser = await database('users')
            .where('user', user)
            .select('*')
            .first();

        if (bdUser !== undefined) {
            if (bdUser.user === user) {
                if (bdUser.password === password) {
                    console.log(`User ${user} logged in`);

                    const authorization = generateAuthorization();
                    return response.status(200).json({ authorization: authorization });
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
        const { user, email, password } = request.body;

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
            socket: {
                web: authorization,
                app: authorization,
            }
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