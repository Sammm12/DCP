const { raw } = require("express");

function questionaireSubmit() {

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }


    fetch("http://localhost:2400/api/auth/login", requestOptions)
    .then(function (response) {
        if (response.ok == true) {
            window.location.href = "https://sammmm12.github.io/DCP/HTML/home.html";

        }
        else if( response.ok == false) {
            alert("not found")
            window.location.href = "https://sammmm12.github.io/DCP/";
        }
        document.getElementById("qSubmit").requestFullscreen()
    })
    .catch(error => console.log('error', error));
    return false
}