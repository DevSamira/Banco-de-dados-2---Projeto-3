const db = require('./loaders/mongoose.js');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const app = express();
const Notas = require('./models/noteModel');
const userModel = require('./models/userModel');
const metodo = require('method-override');
const parse = require('body-parser');

app.use(metodo('_method'))

app.use(parse.json());
app.use(parse.urlencoded({extended: false}));
app.use(session({secret:'egdpanrhcsgwrotksftunw$'}));

//Conectar banco de dados
db()

//Chamando a rota
app.use(routes);


//Adicionando anotação ao banco de dados
app.use(express.urlencoded({extended: true}))

app.post('/dev', async(req, res) => {
    //const titulo = req.body.tituloadd
    //const anotacao = req.body
    //console.log(anotacao)

    const anotacao = new Notas(req.body)
    await anotacao.save()
    res.redirect('/')
})

app.post('/login', async(req, res)=>{
        const userEmail = req.body.email;
        const userPass = req.body.password;

        const user = await userModel.findOne({email: userEmail, password: userPass});

        if(user){
            req.session.login = userEmail;
            res.redirect('/');

            //console.log(user);
        }else{
            res.json({"message": "User não cadastrado"});
        }
})

app.set('view engine' , 'ejs')

//Listando a porta.
app.listen(3000, () => console.log('Server em funcionamento - http://localhost:3000'));