const axios = require('axios');
const Url = 'http://localhost:2400/api/auth';
const signupUrl = 'http://localhost:2400/api/auth/signup'
const loginUrl = Url + '/login'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

let body = {
    email: "email@email.com",
    password: "password"
}

axios.post(signupUrl, body, axiosConfig)
    .then(function (response) {
        alert(response);
    })
    .catch(function (error) {
        alert(error)
    });