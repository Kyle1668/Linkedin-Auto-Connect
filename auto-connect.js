// Developed by Kyle O'Brien

// Manually set "connectionQuota" with the number of connection requests you'd like to make.
// The script will finish executing when quota is met.

var connectionsQuota = SET_QUOTA_INT;
var numRequestsSent = 0;

var interval = setInterval(function () {
    if (numRequestsSent <= connectionsQuota) {
        addConnections();
    }
}, 3000);

// Add or remove elements based on search paramaters. 

var targetTitles = [
	"chief technology officer",
	"chief executive officer",
	"human resources",
	"recruiting",
	"recruiter",
	"investor",
	"sourcer",
	"talent",
	"cto",
	"ceo",
	"hr"
];

function addConnections() {

    var connections = document.getElementsByClassName("mn-pymk-list__cards")[0].getElementsByTagName("li");

    for (var i = 0; i < connections.length; i++) {
        
        var title = connections[i].getElementsByClassName("mn-person-info__occupation")[0].innerText;
        var name = connections[i].getElementsByClassName("mn-person-info__name")[0].innerText;
        var connectButton = connections[i].getElementsByClassName("button-secondary-small")[0];

        if (checkTitle(title)) {
            if (numRequestsSent == connectionsQuota) {                
                clearInterval(timer);
                break;
            } 
            else {
                connectButton.click();
                numRequestsSent += 1;
                console.log(name + ": " + title);
            }
        }

        // Scroll to bottom of screen to show more connections.

        window.scrollTo(0, document.body.scrollHeight);
    }

    console.log("Requests Sent: " + numRequestsSent)
}

function checkTitle(connectionTitle) {

    var titleComponents = connectionTitle.toLowerCase().split(/[.,\/ -]/);

    for (var k = 0; k < titleComponents.length; k++) {
        for (var i = 0; i < targetTitles.length; i++) {
            if (titleComponents[k] === targetTitles[i]) {
                return true;
            }
        }
    }

    return false;
}
