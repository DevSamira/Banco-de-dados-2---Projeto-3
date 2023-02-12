const mongoose = require("mongoose");
require('dotenv').config()

async function startDB() {
	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(process.env.LINK);
		console.log("Banco de dados conectado!");
	} catch (error) {
		console.log("Banco de dados deu problema!" + error);
	}
}

module.exports = startDB;
