inputSubject = document.getElementById("inputSubject");
inputType = document.getElementById("inputType");
inputSeverity = document.getElementById("inputSeverity");
inputPriority = document.getElementById("inputPriority");
inputDescription = document.getElementById("inputDescription");
inputStatus = document.getElementById("inputStatus");



function addTicket(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/ticket", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({

            "subject" : inputSubject.value,
            "type": inputType.value,
            "severity": inputSeverity.value,
            "priority": inputPriority.value,
            "description": inputDescription.value,
            "status": inputStatus.value

    }));
    document.location.href = "/";
}