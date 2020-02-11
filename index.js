const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url =  'mongodb://activiot_mongo:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true } );

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) return console.error(err);
  console.log("Connected successfully to server");

  //const db = client.db(dbName);
  //client.close();
});
