const mongoose = require('mongoose'); //Node environment package. Must require and assign it to variable. 

mongoose.connect('mongodb://localhost/users_test'); //When Mocha starts up we must tell mongoose to connect to mongo. You must explicitly tell it where to connect to it. /users_test is telling which database within mongo's instance that it needs to connect to. We don't have to create a db ahead of time. Mongoose and Mongo will work together and Mongo will make it happen. We don't know how long this connection will take. 

mongoose.connection 
    .once('open', () => console.log('Good to go!')) //event handler. watch for it to open then console.
    .on('error', (error) => { //event handler. watch for error then console it. Open and error are very particular events from the docs. Not made up. 
        console.warn('Warning', error);
})



