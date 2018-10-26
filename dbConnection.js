const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const config = require(`./config.json`);

module.exports = (app) => {

	mongoClient.connect(config.mongo.url, { useNewUrlParser: true } , (err, client) => {

		console.log("Подключились к базе...");

		app.locals.db = client.db(config.mongo.name);

	});

};