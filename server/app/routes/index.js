var twitterController = require('../controllers/twitterController');

module.exports  = function(app) {

    app.route('/tweets/:hastag')
        .get(twitterController.getTwitterByHastag);    

    };