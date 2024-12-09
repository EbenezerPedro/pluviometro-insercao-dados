const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    async (email, password, done) => {
        try {
            // Verifica se o usuário existe
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'Usuário não encontrado.' });
            }
            // Verifica se a senha está correta
            const match = await user.matchPassword(password);
            if (!match) {
                return done(null, false, { message: 'Senha incorreta.' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});
