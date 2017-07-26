//write a test to make sure we can create a new user and save it to our database. 

// Save user: 
// 1. create new user instance.
// 2. save instance
// 3. Test to see if it worked. 

const assert = require('assert'); //allows us to make assertion within out it block. 
const User = require('../src/user'); //must require files where you are wanting to test info from. Represents entire user collection that sits inside our mongo db. 

describe('Creating records', () => { //describe function takes two arguments. The first is a string. Second is a function. String has nothing to do with testing it is soley for telling us which test is breaking when we look at the broken tests. 
    it('saves a user', () => { //it takes same arguments as describe. It block is key to all testing in mocha. inside of every it function we make we need to have an assertion. Compairs one value to another. Mocha gives us global access to describe and it but not to an assertion. 
        const joe = new User({ name: 'Joe' })  //all it takes to create new user instance on user collection. Doesn't actually save joe to our db. Joe is just sitting in memory in our program not saved. 

        joe.save(); //joe has a ton of functions attached to us and one of them is save. This will save it to the db. Our record of joe should now be inside mongo. 

    })
}); 

//we use commandline to run out tests. npm run test.   Go to Package.json.  "test": "mocha"




