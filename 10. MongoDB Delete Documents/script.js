/*
    test> db.movies.deleteOne.help()
    OUTPUT:-
    db.collectionName.deleteOne(filter, options)
    Removes a single document from a collection.

    filter: what you want to delete
    options: additional options for the delete operation



    test> db.movies.deleteOne({ name: "Hulk" })
    -> this will delete the document containing this field
    i.e. "name" as "Hulk"
    
    OUTPUT:-
    {
        acknowledged: true,
        deletedCount: 1
    }

*/

/*
    test> db.movies.deleteMany.help()
    OUTPUT:-
    Removes all documents that match the filter from a collection.



    test> db.movies.deleteMany({ rating: { $lte: 5} })
    OUTPUT:-
    {
        acknowledged: true,
        deletedCount: 2
    }
*/

