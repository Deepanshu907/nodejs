const mongoose = require('mongoose');
mongoose.connect("localhost:27017/nodedatabase",{
    
});

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})


module.exports = mongoose.model(user, UserSchema);