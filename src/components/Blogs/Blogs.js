import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Question-Difference between javascript and nodejs.</h3>
            <p>Answer:JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. JavaScript is used for any client-side activity for a web application, but Node JS mainly used for accessing or performing any non-blocking operation of any operating system. JavaScript running any engine like FireFox,Safari,Google Chrome. On the other hand,Node JS only run in a V8 engine which mainly used by google chrome. </p>

            <h3>Question-When should you use nodejs and when should you use mongodb?</h3>
            <p>Answer: MongoDB and NodeJS are two different technologies. Node.js with Express.js can also be used to create classic web applications on the server-side. However, while possible, this request-response paradigm in which Node.js would be carrying around rendered HTML is not the most typical use-case. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

            <h3>Question-Differences between sql and nosql databases.</h3>
            <p>Answer:SQL databases are primarily called as Relational Databases (RDBMS), whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases are not suited for hierarchical data storage, but NoSQL databases are best suited for hierarchical data storage. SQL databases vertically Scalable,on the other hand NoSQL databases horizontally scalable. SQL databases have fixed or static or predefined schema and NoSQL databases have dynamic schema.SQL databases are best suited for complex queries, while	NoSQL databases are not so good for complex queries.</p>
        </div>
    );
};

export default Blogs;