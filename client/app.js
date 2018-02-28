var tweetsController = require('./js/app/controllers/TweetsController');

tweetsController.getTweetsByHastag();

document.getElementById("submitText").addEventListener("click", tweetsController.searchTweets, false);
document.getElementById("textForSearch").addEventListener("change", tweetsController.searchTweets, false);
