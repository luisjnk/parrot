var tweetsHepler = require('../helpers/tweets.helper');

class TweetsESRepository {
  
  static  save(tweets) {
        return new Promise(function (resolve, reject) {
            let body = tweetsHepler.mappingToBulkInsert(tweets);
            resolve(body)
            global.client.bulk({
                body: body
              }, function (err, resp) {
                  if(err) {
                      reject(err);
                  }
                  resolve(resp);
              });

        });
    }

   static search(text) {
        return new Promise(function (resolve, reject) {
            let body = tweetsHepler.mappingToESSearch(text)

            global.client.msearch({
                body: body
              }, function (err, resp) {
                if(err) {
                    reject(err);
                }
                resolve(tweetsHepler.mappingESSearchResult(resp))
                //resolve(resp);
            });
        });
    }
    

    

}

module.exports = TweetsESRepository;

