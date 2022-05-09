import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'  
import './CSS/SignUp.css';
import sunset from './img/sunset.jpeg';
import logo from './img/Favicon.png';  
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: '',
          username: '',
          password: '',
        };
  
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleIDChange = this.handlePasswordChange.bind(this);
    }
  
    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }
    handleUsernameChange (event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
    <body>
        <br></br>
        <nav class="navbar justify-content-center">
            <a href="#" class="navbar-brand">
                <img src={logo} alt="Logo - Image" class = 'logo'/>
            </a>
        </nav>
<CardGroup>
  <Card style={{ height: "25vw"} }>
    <Card.Img variant="" src={sunset} class = "sun"/>
  </Card>

  <Card style={{ height: "25vw", width: '9rem' }}>
    <Card.Body>
       <form class = "signup" onSubmit={this.handleSubmit}>
          <br></br>
          <h5>Sign Up</h5>
         <label>Email:
                <input type="email" value={this.state.value} onChange={this.handleEmailChange} />
          </label>
          <br></br>
          <label>Username:
                <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
          </label>
          <br></br>
          <label>Password: 
                <input type="password" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <br></br>
          <label> Confirm Passoword: 
                <input type="password" value={this.state.value} onChange={this.handlePasswordChange}/>
          </label>
          <br></br>
          <input type="submit" value="Sign Up"/>
        </form>
        <br></br>
        <form class = "login" onSubmit={this.handleSubmit}>
        <h5>Log In</h5>
          <label>Username:
                <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
          </label>
          <br></br>
          <label>Password: 
                <input type="password" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <br></br>
          <div className='button'>
                <input type="button" value="ForgotPassword" checked={this.state.selectedOption === "ForgotPassword"} onChange={this.onValueChange} />
          </div>
          <input type="submit" value="Login" />
        </form>
    </Card.Body>
       
    </Card>
</CardGroup>
    </body>
       );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SignUp/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();