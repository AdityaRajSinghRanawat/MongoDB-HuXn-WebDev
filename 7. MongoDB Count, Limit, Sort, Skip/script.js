/*
    test> db.movies.find().count()
    -> this will give total number of documents in the collection

    test> db.movies.find().limit(2)
    -> this will show the first 2 documents in the collection

    test> db.movies.find().skip(2)
    -> this will skip the first 2 documents and show the rest

    test> db.movies.find({}, {name: 1}).sort({name: 1})
    -> this will arrange documents in ascending order of "name" field
    NOTE: this will NOT change the original collection

    test> db.movies.find({}, {name: 1}).sort({name: -1})
    -> this will arrange documents in descending order of "name" field

    Madness Section:-
    test> db.movies.find({}, {name: 1}).sort({name: 1}).skip(1).limit(2)
*/
