const mongoose = require('mongoose');

const SchemaUser = mongoose.Schema;
const userId = SchemaUser.ObjectId;

const userSchema = new SchemaUser({
    name: String,
    email: String,
    password: String,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

const userModel = mongoose.model('users', userSchema);

//userSchema.index({name:'text', email:'text', password:'text'});

module.exports = userModel;