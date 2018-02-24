var mongoose = require('mongoose'),
     Schema = mongoose.Schema;

var tweetsSchema = new Schema({
    tweets : [ {
        text: {type:String}
    }
]
});

module.exports = mongoose.model('tweets',tweetsSchema)