const signUpUrl = 'http://localhost:2400/api/auth/signup';
const signInUrl = 'http://localhost:2400/api/auth/login';

function validateSignup(email, password, passwordVerification) {
    if (password !== passwordVerification) {
        console.log('passwords do not match');
    } else {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(signUpUrl, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(alert("User Created"))
            .then(document.getElementById("signupform").reset())
            .catch(error => console.log('error', error));
    }
}

function validateLogin(email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:2400/api/auth/login", requestOptions)
        .then(function (response) {
            if (response.ok == true) {
                window.location.href = "http://127.0.0.1:8080/HTML/questionnaire.html";
            } else if (response.ok == false) {
                alert('user not found');
                window.location.href = "https://sammm12.github.io/DCP/";
            }

            document.getElementById("signInForm").reset()
        })
        .catch(error => console.log('error', error));
    return false;
}