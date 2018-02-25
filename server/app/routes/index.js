var twitterController = require('../controllers/twitterController');

module.exports  = function(app) {

    app.route('/tweets/:hastag')
        .get(twitterController.getTweetsByHastag);    

    app.route('/tweets/search/:txt')
        .get(twitterController.getTweetsByTxt);    
    
    };