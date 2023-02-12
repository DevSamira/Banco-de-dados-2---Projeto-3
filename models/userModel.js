const mongoose = require('mongoose');

const SchemaUser = mongoose.Schema;

const userSchema = new SchemaUser({
    name: String,
    email: String,
    password: String
});

const userModel = mongoose.model('users', userSchema);

//userSchema.index({name:'text', email:'text', password:'text'});

module.exports = userModel;