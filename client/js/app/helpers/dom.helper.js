class DomHelper {

    static appendTweetsInDOM(tweets) {
        DomHelper.cleanDOM();
        DomHelper.createFirstDom()
        tweets.forEach(element => {
            DomHelper.createContainer();
            DomHelper.createElement(element);
        });
    }

    static cleanDOM() {
        document.getElementById("container").remove()
    }


    static createFirstDom() {
        let div = document.createElement('div');
        div.id = "container";
        document.getElementById("tweetsArea").appendChild(div)

    }

    static createContainer() {
        let div = document.createElement('div');
        div.className = "section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone";
        let secondDiv = document.createElement('div');
        div.appendChild(secondDiv);
        document.getElementById("container").appendChild(div)
    }

    static createElement(tweet) {
        let div = document.createElement('div');
        div.className = "section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone";
        let h5Element = document.createElement('h5');
        let textnode = document.createTextNode(tweet.text);
        h5Element.appendChild(textnode);
        div.appendChild(h5Element)
        document.getElementById("container").appendChild(div)
    }

}

module.exports = DomHelper;