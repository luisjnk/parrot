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
            let response = {}

            Promise.all(
                [tweetsESRepository.save(tweets),
                twitterRepository.save(tweets)]
            ).spread((esresponse, databaseres) => {
                response.esresponse = esresponse
                response.databaseres = databaseres
                res.status(200).send(response);
            }).catch(err => {
                response.err = err;
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

twitter.saveTweets = function (tweets) {
    console.log('aquiw')
    Promise.all(
        [tweetsESRepository.save(tweets),
        twitterRepository.save(tweets)]
    ).spread((esresponse, databaseres) => {
        const response = {
            "esresponse": esresponse,
            "databaseres": databaseres
        }
        return response;
    }).catch(err => {
        return err;
    })
}
module.exports = twitter;