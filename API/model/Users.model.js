const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {       
        name :  {
            type : String,
            required : true
        },
        password :  {
            type : String,
            required : true
        },
        email : {
            type :String,
            required: false
        },
        picture : {
            type : String,
            default : "geia sou"
        }
        
    }
);

const record = mongoose.model("User", UserSchema);

module.exports = record;