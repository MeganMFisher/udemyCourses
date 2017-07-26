const mongoose = require('mongoose'); //whenever working with mongo you'll probably require mongoose
const Schema = mongoose.Schema;  //access the schema on the mongoose object. 

const UserSchema = new Schema({  //creates user schema. 
    name: String //reference to JS string
})

const User = mongoose.model('user', UserSchema) //creates user model. First parameter is the name. Mongoose will create things for us within Mongo. User is now the user class and user model. It represents the entire collection of data. 

module.exports = User; //export only the user class/user model. 

//All mongo/mongoose files will be set up basically like this. 


