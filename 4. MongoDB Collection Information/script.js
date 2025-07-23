// MongoDB Shell
/*
    test> show dbs
    -> this show all the available databases

    test> db.getName()
    -> this shows the name of the current database
*/

// you can also write a JS code
/*
    test> const name = "Aditya"
    test> name

*/

// you can also write the JSON format
/*
    test> const data = { name: "Aditya" }
    -> this is a JSON object

    test> const data = { name: "Aditya", age: 20 }

    test> data
*/

// CRUD:-

/*
    Create: db.collectionName.insertOne() or db.collectionName.insertMany()
    Read: db.collectionName.find()
    Update: db.collectionName.updateOne() or db.collectionName.updateMany()
    Delete: db.collectionName.deleteOne() or db.collectionName.deleteMany()
*/

// now lets create a collection

/*
    syntax: db.collectionName.insertOne()

    test> db.movies.insertOne({name: "Your Name", rating: 9.5, year: 2016})
    output:
    {
        "acknowledged": true,
        "insertedId": ObjectId("5f8d0c9b8b3c2f1a2c8b4567")
    }

    This "insertedId" is a unique id because each of our 
    collection/data is different i.e. each of our
    documents is unique.
*/

// to get info about a method 

/*    test> db.movies.insertOne.help()
    -> this will show you the help for the insertOne method

    output:-
    db.collection.insertOne(document, options)

    Inserts a document into a collection.
    
    For more information on usage: 
    https://mongodb.com/docs/manual/reference/method/db.collection.insertOne
*/

/*
    test> db.movies.insertMany.help()
    -> this will show you the help for the insertMany method
*/

