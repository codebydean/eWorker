const mongoose = require('mongoose')

const TrainingCourseSchema = mongoose.Schema(
    {       
        Title : {
            type : String,
            required : true
        },
        Dates :{
            Application : {
                type : Date,
                required : true
            },
            Duration : {
                type : Date,
                required : true
            },
            Conducted : {
                type : Date,
                required : true
            },
        },
        Pricing : {
            type : String,
            required : true
        },
        Description : {
            type : String,
            required : true
        },
    }
);

const record = mongoose.model("TrainingCourse", TrainingCourseSchema);

module.exports = record;