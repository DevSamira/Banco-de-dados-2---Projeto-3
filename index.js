const db = require('./loaders/mongoose.js');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const app = express();
const Notas = require('./models/noteModel');
const userModel = require('./models/userModel');
const metodo = require('method-override');
const parse = require('body-parser');
const neo4jFunc = require('./loaders/neo4j.js'); 

app.use(metodo('_method'));

app.use(parse.json());
app.use(parse.urlencoded({extended: false}));
app.use(session({secret:'egdpanrhcsgwrotksftunw$'}));

//Conectar banco de dados
db()

//Chamando a rota
app.use(routes);

let idUser = "";

//Adicionando anotação ao banco de dados
app.use(express.urlencoded({extended: true}));


app.post('/dev', async(req, res) => {

    const anotacao = new Notas(req.body);
    await anotacao.save();
    res.redirect('/');
    neo4jFunc.addPost(anotacao._id);
    const mongooseModel = await userModel.findOne({}, {}, { sort: { 'created_at' : -1 } });
    neo4jFunc.addCreate("63ed0ecffedc9b29831f1c4b", anotacao._id);
    console.log("Mongoose:" + mongooseModel);
})

app.post('/login', async(req, res)=>{
        const userEmail = req.body.email;
        const userPass = req.body.password;

        const user = await userModel.findOne({email: userEmail, password: userPass});

        if(user){
            req.session.login = userEmail;
            req.session.id = user._id;
            console.log(user._id);
            res.redirect('/');

            //console.log(user);
        }else{
            res.json({"message": "User não cadastrado"});
        }
})

app.get('/logout', async(req,res) =>{
    req.session.destroy();
    res.json({"message": "Deslogado"});
})

app.post('/cadastro', async(req, res)=>{
    const user = new userModel(req.body);
    //console.log(user);
    await user.save();
    const userId = user._id;
    neo4jFunc.addUser(userId);
    idUser = userId;
    console.log(idUser);
    res.redirect('/login');
})

app.set('view engine' , 'ejs')

//Listando a porta.
app.listen(3000, () => console.log('Server em funcionamento - http://localhost:3000'));