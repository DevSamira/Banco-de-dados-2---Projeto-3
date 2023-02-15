const neo4j = require('neo4j-driver');

//NEO4J

//import neo4j from 'neo4j-driver';
const uri = `neo4j+s://${process.env.NEO4J_PORT}`;
const driver = new neo4j.driver(uri, neo4j.auth
    .basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
const session = driver.session();

class neo4jFunc {
	async addUser(idUser){
		try{
			//const query = `CREATE (u:User{id:${newId}})`;
			await session.run(`CREATE (u:User{id:"${idUser}"})`).then(console.log("Deu certo user"));
		}finally{
			session.close();
		}
	}
	async addPost (idPost){
		try{
            const session = driver.session();
			await session.run(`CREATE (p:Post{id:"${idPost}"})`).then(result => console.log("Deu certo post"));
		}finally{
			session.close();
		}
	}
	async addCreate(idUser,idPost){
            const session = driver.session();
			await session.run(`MATCH (u:User{id:"${idUser}"}) OPTIONAL MATCH (p:Post{id:"${idPost}"}) CREATE (u)-[r:CRIOU]->(p)`).then(result => console.log(
				`Deu certo criou. Id do user: ${idUser}, Id do post: ${idPost}`));
			session.close();
	}
}

module.exports = new neo4jFunc;
