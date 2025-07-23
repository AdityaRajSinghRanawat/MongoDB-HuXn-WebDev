/*
    test> db.movies.find()
    -> this will show you all the documents in the movies collection

    test> db.movies.find({ name: "Belle" })
    -> this will show you the document that has the name "Belle"

    test> db.movies.find({ genre: "Adventure" })
    -> output will be blank since we naver inserted a genre field

    test> db.movies.find({ rating: 8 })
    -> this will show you all the documents that have a rating of 8

    test> db.movies.find({ name: "Spirited Away", year: 2001 })
    -> we can pass multiple fields for searching
    -> this will show you the document that has 
    the (name "Spirited Away" AND year 2001)

    test> db.movies.find({ name: "Spirited Away" }, {name: 1})
    -> this will ONLY show you the "name" field of the document
    -> NOTE: the "_id" field will always be shown

    test> db.movies.find({ name: "Spirited Away" }, {name: 0})
    -> this will show all the fields EXCEPT "name" field of the document
    
    test> db.movies.find({}, {name: 1, _id: 0})
    -> this will show you the "name" field of ALL documents 
*/