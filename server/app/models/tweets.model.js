var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var tweetsSchema = new Schema({
    tweets : [ {
        text: {type: String},
        id: { type: Number},
        id_str : {type : String},  
        hastags : {type : Array}
    }
]
});

module.exports = mongoose.model('tweets',tweetsSchema)