const userModel = require('../models/userModel');

class loginController{

    async renderizarLog (req, res) {
        res.render('../views/login.ejs');
    }
    async renderizarCad (req, res) {
        res.render('../views/cadastro.ejs');
    }
}

module.exports = new loginController;