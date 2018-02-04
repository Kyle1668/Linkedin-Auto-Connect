// Script automaticly adds recommended Linkedin connections on linkedin.com/mynetwork/ by target job titles.
// Developed by Kyle O'Brien

function addConnections() {
    var numRequestsSent = 0;
    var connections = document.getElementsByClassName("mn-pymk-list__cards")[0].getElementsByTagName("li");

    for (var i = 0; i < connections.length; i++) {
        var title = connections[i].getElementsByClassName("mn-person-info__occupation")[0].innerText;
        var name = connections[i].getElementsByClassName("mn-person-info__name")[0].innerText;
        var connectButton = connections[i].getElementsByClassName("button-secondary-small")[0];
       
        if (checkTitle(title)) {
            console.log(name + ": " + title)
            connectButton.click();
            numRequestsSent += 1;
        }

        window.scrollTo(0,document.body.scrollHeight);
    }
}

function checkTitle(connectionTitle) {

    var titleComponents = connectionTitle.toLowerCase().split(" ");

    var targetTitles = [
        "chief technology officer",
        "chief executive officer",
        "human resources",
        "recruiter",
        "investor",
        "sourcer",
        "talent",
        "cto",
        "ceo",
        "hr"
    ]

    for (var k = 0; k < titleComponents.length; k++) {
        for (var i = 0; i < targetTitles.length; i++) {
            if (titleComponents[k] === targetTitles[i]) {
                return true;
            }
        }
    }

    return false;
}

addConnections();
