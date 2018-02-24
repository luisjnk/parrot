var Twit = require('twit');
var config = require('../../config/twitterConfig')
var Promise = require("bluebird");

var T = new Twit(config);

class TwitterService {
    constructor() {

    }

    getTweetsByTag(hastag) {
        return new Promise(function (resolve, reject) {
            let params = {
                q: hastag,
                count: 100
            };

            T.get('search/tweets', params,
                function (err, data, response) {
                    if(err) {
                        reject(err)
                    }

                    resolve({
                        data : data,
                        response : response
                    });
                })
        })
    }

}

module.exports = TwitterService;

