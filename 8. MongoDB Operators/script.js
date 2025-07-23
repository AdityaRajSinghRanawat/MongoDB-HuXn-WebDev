/*
    test> db.movies.find({ rating: { $gt: 8.0 } })
    -> this will show you all the documents that have a (rating > 8.0)

    test> db.movies.find({ year: { $lte: 2016 } })
    -> this will show you all the documents that have a (year <= 2016)
*/