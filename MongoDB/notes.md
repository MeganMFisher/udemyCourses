#install mongo

#mongod //Is what runs mongo in terminal. 

Have to create directory

#1. sudo mkdir -p /data/db

#2. whoami //user operating name

#3. sudo chown -Rv <username> /data/db

Only have to do these one time. 

RoboMongo Download. robomongo.org/download

Mongo is a Database. Can use it with lots of languages. 

Node can use Mongoose to make working with Mongo easier. 

**Fundamentals of Mongo**

We can have multiple databases inside a single mongo instance. You can work with multiple projects at the same time. You can develop on multiple applications at the same time. 

A collection is the core unit for storage within Mongo. We will not mix any type of data within the collections. Collections are great to design ahead. 

**Core Mongoose/Mongo**

A single mongo db can have multiple databases with multiple collections. No real reason to mix types of data within the collections. 

#Create Read Update Destroy. 

#npm install --save mocha nodemon mongoose

**test timeline**

mocha starts
tell mongoose to connect ot Mongo
wait
Mongoose connects to Mongo
Connection Successful? run tests
Connection Failed? Show error

**Model**

Model: All of the data in a single collection.

When we create model Mongoose will automatically create collection as well. 

Mongoose helps create models which will have a schema. Each instance is a piece of data. 

**Mocha**

At top of every test file we will have a 'describe' block. or describe function. 

Inside function we will have a variety of 'it' blocks. It will have code to test our code. 

All test files end with '_test' 

##To run tests in command line: npm run test

