const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017'

const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)=> {
    if (error) {
       return console.log('Unable to connect to database')
    }

    console.log('Connected to database!')

    const db = client.db(databaseName);
    const updatePromise = db.collection('users').updateOne({_id: new ObjectID("5e568061467df74a601a36d5")}, {
        $set: {
            name: "Ing. Michal Svoboda"
        }
    })
    /*
    db.collection('users').findOne({_id: new ObjectID("5e6560a1199add3ed855d434")}, (error, user) => {
        if (error) {
            console.log('Unable to find item');
        }
        console.log(user);
    })

    db.collection('users').find({name: 'Michal Svoboda'}).toArray((error, users) => {
        console.log(users);
    });
    
    db.collection('users').insertOne({
            _id: id,
            name: 'Michal Svobodacek',
            age: 39
    },(error, result) => {
        if (error) {
            return console.log('Unable to open user')
        }

        console.log(result.ops)
    });

    db.collection('users').insertMany([{name: 'Adam Svoboda', age: 8},
     {name: 'Ema Svobodova', age: 6}],{ ordered: false },(error, result) => {
        if (error) { 
        return console.log('Unable insert');
        }
        console.log(result.ops);
     })

     db.collection('tasks').insertMany(
         [{description:'Clean the house', complete: true},
         {description: 'Renew inspection', complete: false},
          {description: 'Pot plants', complete: false}
         ],{ ordered: false },(error, result) => {
        if (error) { 
            return console.log('Unable insert');
        }
        console.log(result.ops);
     })*/


    });