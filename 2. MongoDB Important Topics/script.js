// Example:-
/*
    {
        _id: ObjectId("df123asdfwer3"), 
        name: "HuXn",
        age: 18
    }
    { 
        _id: ObjectId("df123asdfwer3"), 
        name: "Alex",
        age: 24
    }
*/


/*
    Fields [Combination] => Document
    Document [Combination]=> Collection
    Collection [Combination] => Database
*/



// Database:-
/*
    Collection 1:-
    {
        Document 1:-
        {
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "HuXn",                     <-Field
            age: 18                           <-Field
        }
        Document 2:-
        { 
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "Alex",                     <-Field
            age: 24                           <-Field    
        }
    }

    Collection 2:-
    {
        Document 1:-
        {
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "HuXn",                     <-Field
            age: 18                           <-Field
        }
        Document 2:-
        { 
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "Alex",                     <-Field
            age: 24                           <-Field    
        }
    }
        

    Collection 3:-
    {
        Document 1:-
        {
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "HuXn",                     <-Field
            age: 18                           <-Field
        }
        Document 2:-
        { 
            _id: ObjectId("df123asdfwer3"),   <-Field
            name: "Alex",                     <-Field
            age: 24                           <-Field    
        }
    }
*/

//Key Points:-
/*
    - A document is a set of key-value pairs that 
    represent a single record within a collection.
    
    - A field is a specific piece of data within 
    a document that holds a value.
    
    - A collection is a group of related documents 
    that share a common structure and are stored 
    in the same database.
    
    - Database is a container for collections of 
    JSON-like documents.
*/