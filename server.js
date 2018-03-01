var http = require('http')
    ,app = require('./server/config/express');

http.createServer(app).listen(3000, function() {
    console.log('Server is listing at port : ' + this.address().port);
});

