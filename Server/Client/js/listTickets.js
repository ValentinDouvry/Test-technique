const api_url = "http://localhost:3000/api/tickets";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        showTickets(data);
    }
};
xmlhttp.open("GET", api_url, true);
xmlhttp.send();

function showTickets(data) {

    var nbStatusNew = 0;
    var nbStatusInProgress = 0;
    var nbStatusClosed = 0;

    var i;
    for (i = 0; i < data.DATA.length; i++) {

        switch (data.DATA[i].status) {
            case "Nouveau":
                nbStatusNew++;
                break;
            case "En cours":
                nbStatusInProgress++;
                break;
            case "Fermé":
                nbStatusClosed++;
                break;
        }
        arrayUpdate = data.DATA[i].modification_notes;
        lastUpdated = arrayUpdate[arrayUpdate.length -1];
        date = new Date(lastUpdated.modified_on);
        var dateString = date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var rowTicket = '<div class="card mb-2"><div class="row"><div class="col-sm ml-1">' + data.DATA[i].type + '</div><div class="col-sm">' + data.DATA[i].severity + '</div><div class="col-sm">' + data.DATA[i].priority + '</div><div class="col-sm">' + data.DATA[i].subject + '</div><div class="col-sm">' + data.DATA[i].status + '</div><div class="col-sm">' + dateString + '</div><a href="/ticket/?id=' + data.DATA[i]._id + '" class="stretched-link"></a></div></div>';
        document.getElementById("ticketsContainer").innerHTML += rowTicket;
    }

    statsNew = document.getElementById("statsNew");
    statsNew.innerHTML += nbStatusNew;
    statsInProgress = document.getElementById("statsInProgress");
    statsInProgress.innerHTML += nbStatusInProgress;
    statsClosed = document.getElementById("statsClosed");
    statsClosed.innerHTML += nbStatusClosed;

}

