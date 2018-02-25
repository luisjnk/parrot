var Promise = require("bluebird");

class TweetsHelper {

  static mappingTweets(tweets) {
            let tweetsMapped = []
            tweets.statuses.forEach(element => {
                tweetsMapped.push(
                    { 
                      id: element.id,
                      id_str : element.id_str,  
                      text : element.text,
                      hastags : element.entities.hastags
                    }
                )
            });
            return tweetsMapped;
    }

   static mappingToBulkInsert(tweets) {
        
        let tweetsForEs = []
        
        tweets.data.forEach(element => {
            tweetsForEs .push ({
                "create" : {
                    "_index" : "text", "_type" : "type1", 
                   "_id" : element.id      
                } 
            }, {
                text : element.text
            } )
        })
        return tweetsForEs;
    }
    
    static mappingToESSearch(txt) {
        let body = []
        body.push({
            "index" : "text", "_type" : "type1"
        })
        body.push({
            "query" : {
                "query_string" : {
                    "query" : txt
                }
            }
        })

        return body;
    }

    static mappingESSearchResult(esresult) {
        let result = []
        
        esresult.responses.forEach(resp => {
            resp.hits.hits.forEach(element => {
                result.push({
                    text : element._source.text
                }
                )
            })
        })
        return result;
    }

}

module.exports = TweetsHelper;

