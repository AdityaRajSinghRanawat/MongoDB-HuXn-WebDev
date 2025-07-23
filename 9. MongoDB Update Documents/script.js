/*
    test> db.movies.updateOne.help()
    OUTPUT:-
    db.collectionName.updateOne(filter, update, options)
    Updates a single document within the collection based on the filter.

    filter: what you want to update
    update: the changes you want to apply
    options: additional options for the update operation


    test> db.movies.updateOne({name: "Your Name"}, { $set: {rating: 9}})
    -> changed the rating of movie "Your Name", 9.5 -> 9
    
    OUTPUT:-
    {
        acknowledged: true,
        insertedId: null,
        matchedCount: 1,
        modifiedCount: 1,
        upsertedCount: 0
    }


    NOTE: Use "Ctrl + R" in MongoDB Compass to see changes

    NOTE: If you write wrong filed name then it will create a 
    new field and write the updated value in it.
*/

/*
    test> db.movies.updateMany({rating: 9}, {$set: {rating: 9.5}})
    -> changed the rating of all movies with rating equal to 9, 9 -> 9.5
    
    OUTPUT:-
    {
        acknowledged: true,
        insertedId: null,
        matchedCount: 2,
        modifiedCount: 2,
        upsertedCount: 0
    }
*/