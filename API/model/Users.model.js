const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name : String,
        Login : {
            username :  {
                type : String,
                required : true
                },
            password :  {
                type : String,
                required : true
            }
        }
    }
);

const record = mongoose.model("User", UserSchema);

module.exports = record;