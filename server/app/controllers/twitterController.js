/* Código simplório, apenas para fornecer o serviço para a aplicação */
var twitterService = require('../services/twitter.service');

var twitter = {}

twitter.getTwitterByHastag = function(req, res) {
   let hastag =  req.params.hastag
    twitterService = new twitterService()
    twitterService
        .getTweetsByTag(hastag)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(400).send(err);
        })
};

module.exports = twitter;