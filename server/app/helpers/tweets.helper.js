var Promise = require("bluebird");

class TweetsHelper {
    constructor() {

    }

    mappingTweets(tweets) {
            let tweetsMapped = []
            tweets.statuses.forEach(element => {
                tweetsMapped.push(
                    {
                      text : element.text
                    }
                )
            });
            return tweetsMapped;
    }

}

module.exports = TweetsHelper;

