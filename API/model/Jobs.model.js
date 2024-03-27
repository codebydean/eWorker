const mongoose = require('mongoose')

const JobSchema = mongoose.Schema(
    {
        published_date :{
            type: String,
            required: [true, "please enter Record name"]
        },
        Title : {
            type:String,
            required : true
        },
        Category : {
            type:String,
            required : true
        },
        details : {
            Company : {
                type  :String,
                required : false
            },
            City : {
                type:String,
                required : true
            },
            Avocation : {
                type : ['Full',"Semi"]
            }
        }
    }
);

const record = mongoose.model("Job", JobSchema);

module.exports = record;