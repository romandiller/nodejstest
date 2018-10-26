// query.js
'use strict';

class Query {
    
    constructor() {}

    save(options, callback) {

		let collection = options.db.collection(options.collection);
	
    	if (Object.prototype.toString.call(options.data) === '[object Array]') {

    		for (let key in options.data) {

    			options.data[key].time = new Date();

    		}
    
			this.saveData = options.data;

    	} else {

	   		data.time = new Date();
	   		this.saveData.push(options.data);

    	}

		collection.insertMany(this.saveData, (err, result) => {

			if (err) console.log('При добавлении получилась ошибка');
            
            if (result) {

				client.close();

				(result.insertedCount === 1) ? callback(result.ops[0]) : callback(result.ops);

				this.saveData = [];

            }

		});

    }

  	findAll(options, callback) {

  		console.log('findAll');

  		let collection = options.db.collection(options.collection);

		collection.find({}).toArray((err, result) => {

			console.log(result);

			if (err) console.log('При поиске произошла ошибка');
            
    		if (result) {

            	callback(result);

            }

		});

  	}

    findItem(options, callback) {

    	console.log('findItem');

    	let collection = options.db.collection(options.collection);

    	collection.find(options.query).toArray((err, result) => {

    		if (err) console.log('При поиске произошла ошибка');

    		if (result) {

            	callback(result[0]);

            }

    	});

    }

    findItems(options, callback) {

    	console.log('findItems');

		let collection = options.db.collection(options.collection);

		collection.find(options.query).toArray((err, result) => {

			if (err) console.log('При поиске произошла ошибка');
            
    		if (result) {

            	callback(result);

            }

		});

    }

}

module.exports = Query;