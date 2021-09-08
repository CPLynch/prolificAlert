

function sweepStudies(){
    studies = document.querySelectorAll('#classforallstudies')

    for (i=0;i<studies.length;i++) {
        valuePerHour = studies[i].querySelector("#price").value //this may need to change to innerhtml or something
        if (valuePerHour >= 7) { //maybe convert to number
            studies[i].querySelector("#buttonToAccept")
        }
    }
}

setInterval(sweepStudies, 5000)