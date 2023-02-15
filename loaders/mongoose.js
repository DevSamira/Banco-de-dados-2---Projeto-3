// MONGODB

const mongoose = require("mongoose");
require('dotenv').config();

async function startDB() {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(process.env.LINK);
		console.log("Banco de dados conectado!");
	} catch (error) {
		console.log("Banco de dados deu problema!" + error);
	}
}

/* --- Testes ---
const obj1 = {
	name: "Pessoa"
}
const obj2 = {
	title: "Boa tarde"
}

addUser(obj1);
addPost(obj2);
addCreate(6,0);*/

module.exports = startDB;
