
const signUpUrl = 'http://localhost:2400/api/auth/signup';
const signInUrl = 'http://localhost:2400/api/auth/login';

function validateSignup(email, password, passwordVerification) {
    if (password !== passwordVerification) {
        alert('passwords do not match');
        return false;
    } else {
        let body = {
            "email": email,
            "password": password
        }

        let config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        }
        axios.post(signUpUrl, body, config)
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
        return true;
    }
}

function validateLogin(email, password) {

}