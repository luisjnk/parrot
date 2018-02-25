/* Código simplório, apenas para fornecer o serviço para a aplicação */
var twitterService = require('../services/twitter.service');
var twitterRepository = require('../repository/tweets.repository');
var tweetsESRepository = require('../repository/tweets.es.repository');
var Promise = require("bluebird");

var twitter = {}

twitter.getTweetsByHastag = function (req, res) {
    let hastag = req.params.hastag

    twitterService
        .getTweetsByTag(hastag)
        .then(tweets => {
            Promise.all(
                [tweetsESRepository.save(tweets),
                twitterRepository.save(tweets)]
            ).spread((esresponse, databaseres) => {
                const response = {
                    "esresponse": esresponse,
                    "databaseres": databaseres
                }
                res.status(200).send(response);
            }).catch(err => {
                res.status(400).send(err);
            })
        }).catch(err => {
            res.status(400).send(err);
        })
}

twitter.getTweetsByTxt = function (req, res) {
    let txt = req.params.txt;

    tweetsESRepository
        .search(txt)
        .then(tweets => {
            res.status(200).send(tweets);
        })
        .catch(err => {
            res.status(400).send(err);
        })
}

module.exports = twitter;