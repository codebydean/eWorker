const mongoose = require('mongoose')

const WorkProgramSchema = mongoose.Schema(
    {       
        name :  {
            type : String,
            required : true
        }  
    }
);

const record = mongoose.model("WorkProgram", WorkProgramSchema);

module.exports = record;