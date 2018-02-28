var axios = require('axios');
var config = require('../configs/config.js')
var Promise = require("bluebird");

class TweetsService {

    static getTweetsByHastag(hastag) {
        return new Promise(function (resolve, reject) {

            let url = 'tweets/' + hastag;
            axios.get(url)
                .then(response => {
                    if (response.data.databaseres.tweets.length == 0) {
                        alert("No tweets found with the hashtag" + hastag)
                    }
                    else {
                        resolve(response.data.databaseres.tweets)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    static getTweetsByWord(word) {
        return new Promise(function (resolve, reject) {

            let url = 'tweets/search/' + word;
            axios.get(url)
                .then(response => {
                    console.log('data', response.data)
                    console.log('length', response.data.length)

                   /* if (response.data && response.data.length == 0) {
                        alert("No tweets found with this word")
                    }
                    else {*/
                        resolve(response.data)
                    //}
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

}

module.exports = TweetsService;