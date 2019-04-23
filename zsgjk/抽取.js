const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
module.exports={
    find(jihe,query,callback){
        MongoClient.connect(url, function (err, client) {
            const db = client.db(dbName);
            const collection = db.collection(jihe);
            collection.find(query).toArray(function(err, docs) {
                callback(docs)
            });
          }); 
    },
  insertOne(jihe,crdsj,callback){
    MongoClient.connect(url, function (err, client) {
        const db = client.db(dbName);
        const collection = db.collection(jihe);
        collection.insertOne(crdsj, (err, result) => {
            callback(result)
            client.close()
        });
      });
  }
}