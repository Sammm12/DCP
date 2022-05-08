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
            .catch(error => console.log('error', error));
    }
    return true;
}

function validateLogin(email, password) {

}