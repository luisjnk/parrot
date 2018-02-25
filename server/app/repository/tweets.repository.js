var TweetsSchema = require('../models/tweets.model');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

class TweetsRepository {

   static save(tweets) {
        return new Promise(function (resolve, reject) {
            
            let tweetsSchema = new TweetsSchema({
                tweets: tweets.data
            })

            tweetsSchema
                .save()
                .then(function (res) {
                    resolve(res)
                })
                .catch(function (err) {
                    console.log('err', err)
                    reject(err);
                })

        });
    }
    

}

module.exports = TweetsRepository;

