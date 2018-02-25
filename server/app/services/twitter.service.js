var Twit = require('twit');
var config = require('../../config/config')
var Promise = require("bluebird");
var tweetsHepler = require('../helpers/tweets.helper');
var T = new Twit(config.config.twitterSevice);

class TwitterService {
    constructor() {

    }

    getTweetsByTag(hastag) {
        return new Promise(function (resolve, reject) {
            let params = {  
                q: '#' + hastag,
                count: 100
            };

            T.get('search/tweets', params,
                function (err, data, response) {
                    if(err) {
                        reject(err)
                    }
                    tweetsHepler = new tweetsHepler();
                   let tweets = tweetsHepler.mappingTweets(data);
                    resolve({
                        data : tweets
                    });
                })
        })
    }

}

module.exports = TwitterService;

