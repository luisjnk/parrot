var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);
    mongoose.connection.on('connected', function() {
          console.log('Mongoose! Connected at follow url :' + uri);
    });
    mongoose.connection.on('disconnected', function() {
          console.log('Mongoose! disconnected at follow url: ' + uri);
        });
    mongoose.connection.on('error', function(erro) {
           console.log('Mongoose! Failed try to connect: ' + erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close( function() {
            console.log('Mongoose! Disconnected');
            process.exit(0);
        });
    })

}
