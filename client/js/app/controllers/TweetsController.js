var tweetsService = require('../services/TweetsService')
var domHelper = require('../helpers/dom.helper')
var Promise = require("bluebird");

class TweetsController {

    static getTweetsByHastag() {
        const hastag = 'meinunterricht';
        //const hastag = 'gameofthrones';
        tweetsService
            .getTweetsByHastag(hastag)
            .then(tweets => {
                if (tweets.length > 0) {
                    domHelper.appendTweetsInDOM(tweets);
                }
            })
    }

    static searchTweets() {
        const textForSearch = document.getElementById('textForSearch').value;
        tweetsService
            .getTweetsByWord(textForSearch)
            .then(tweets => {
                console.log(tweets)
                if (tweets.length > 0) {
                    domHelper.appendTweetsInDOM(tweets);
                }
            })
    }

}

module.exports = TweetsController;