const usersCtrl = {};

const passport = require('passport');
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    console.log("Dados recebidos:", req.body);
    const errors = [];
    const { name, email, password, confirm_password, matricula, endereco, escola  } = req.body;

    // Verificação se as senhas foram fornecidas
    if (!password || !confirm_password) {
        return res.status(400).json({ message: "As senhas são obrigatórias." });
    }

    // Verifica se as senhas são iguais
    if (password !== confirm_password) {
        errors.push({ message: "As senhas não correspondem." });
    }

    // Verifica o comprimento da senha
    if (password.length < 4) {
        errors.push({ message: "A senha deve ter pelo menos 4 caracteres." });
    }

    // Se houver erros, responde com erro JSON se for uma solicitação JSON, senão renderiza a página
    if (errors.length > 0) {
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            return res.status(400).json({ errors });
        }
        return res.render("users/signup", { errors, name, email, matricula, endereco, escola });
    }

    try {
        // Verifica se o email já está cadastrado
        const emailUser = await User.findOne({ email });
        if (emailUser) {
            if (req.headers.accept && req.headers.accept.includes("application/json")) {
                return res.status(400).json({ message: "O email já está cadastrado." });
            }
            req.flash("error_msg", "O email já está cadastrado.");
            return res.redirect("/users/signup");
        }

        // Criação do novo usuário
        const newUser = new User({ name, email, password, matricula, endereco, escola });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();

        // Resposta JSON de sucesso, se a solicitação for uma API
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            return res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        }

        // Redireciona para a página de login com sucesso
        req.flash("success_msg", "Você foi cadastrado com sucesso!");
        return res.redirect("/users/signin"); // Aqui adicionei o 'return' para evitar que o código continue

    } catch (err) {
        console.error("Erro ao salvar o usuário:", err);
        if (req.headers.accept && req.headers.accept.includes("application/json")) {
            return res.status(500).json({ message: "Erro interno do servidor." });
        }
        req.flash("error_msg", "Erro interno do servidor.");
        return res.redirect("/users/signup"); // Aqui também adicionei o 'return' para evitar a execução extra
    }
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/',
    failureFlash: true
});

usersCtrl.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success_msg', 'Você saiu com sucesso');
        res.redirect('/users/signin');
    });
};

module.exports = usersCtrl;
