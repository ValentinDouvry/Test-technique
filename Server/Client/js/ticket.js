inputSubject = document.getElementById("inputSubject");
inputType = document.getElementById("inputType");
inputSeverity = document.getElementById("inputSeverity");
inputPriority = document.getElementById("inputPriority");
inputDescription = document.getElementById("inputDescription");
inputStatus = document.getElementById("inputStatus");


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const api_url = 'http://localhost:3000/api/ticket/'+ id; 

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);

        inputSubject.value = data.DATA.subject;

        listType = inputType.getElementsByTagName('option');
        for (var i = 0; i < listType.length; i++) {
            var result = listType[i].value.localeCompare(data.DATA.type);
            if(result === 0)
            {
                listType[i].selected = "selected";
            }
        }       

        listSeverity = inputSeverity.getElementsByTagName('option');
        for (var i = 0; i < listSeverity.length; i++) {
            var result = listSeverity[i].value.localeCompare(data.DATA.severity);
            if(result === 0)
            {
                listSeverity[i].selected = "selected";
            }
        } 

        listPriority = inputPriority.getElementsByTagName('option');
        for (var i = 0; i < listPriority.length; i++) {
            var result = listPriority[i].value.localeCompare(data.DATA.priority);
            if(result === 0)
            {
                listPriority[i].selected = "selected";
            }
        } 

        inputDescription.value = data.DATA.description;

        listStatus = inputStatus.getElementsByTagName('option');
        for (var i = 0; i < listStatus.length; i++) {
            var result = listStatus[i].value.localeCompare(data.DATA.status);
            if(result === 0)
            {
                listStatus[i].selected = "selected";
            }
        } 


    }
};
xmlhttp.open("GET", api_url, true);
xmlhttp.send();



function updateTicket(){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:3000/api/ticket/" + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
            "id": id,
            "subject" : inputSubject.value,
            "type": inputType.value,
            "severity": inputSeverity.value,
            "priority": inputPriority.value,
            "description": inputDescription.value,
            "status": inputStatus.value

    }));
    document.location.href = "/";
    
}


function deleteTicket(){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:3000/api/ticket/" + id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
            "id": id

    }));
    document.location.href = "/";
}
