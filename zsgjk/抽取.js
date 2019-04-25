const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
module.exports={
    find(jihe,query,callback){
        MongoClient.connect(url, function (err, client) {
            const db = client.db(dbName);
            const collection = db.collection(jihe);
            collection.find(query).toArray((err, docs)=>{
                callback(docs)
                client.close()
            });
          }); 
    },
  insertOne(jihe,crdsj,callback){
    MongoClient.connect(url,(err, client)=> {
        const db = client.db(dbName);
        const collection = db.collection(jihe);
        collection.insertOne(crdsj, (err, result) => {
            callback(result)
            client.close()
        });
      });
  },
  ObjectId
}