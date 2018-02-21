var twitterController = require('../controllers/twitterController');

module.exports  = function(app) {

    app.route('/tweets/:expression')
        .get(twitterController.getTwitterByHastag);    

    };