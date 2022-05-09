import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/Questionnaire.css';
import logo from './Favicon.png'; 
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Questionaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fname: '',
          lname: '',
          id: '',
        };
  
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleIDChange = this.handleIDChange.bind(this);
      this.handleStudentStatusChange = this.handleStudentStatusChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleFirstNameChange(event) {
      this.setState({fname: event.target.value});
    }
    handleLastNameChange(event) {
        this.setState({lname: event.target.value});
    }
    handleIDChange(event) {
        this.setState({id: event.target.value});
    }

    handleStudentStatusChange(event) {
        this.setState({selectedOption: event.target.value});
      }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
    <body>
        <br></br>
          <div class="container">
                <img class = "Logo" src={logo} alt="DCP+"/>
          </div>
     
          <br></br>

    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10"></div>
      <form class = "questionnaire" onSubmit={this.handleSubmit}>
      <h2>Tell Us About You</h2>
        <div className='radio'>
         <label> Student Status:
                <input type="radio" value="Full Time" checked={this.state.selectedOption === "Full Time"} onChange={this.onValueChange} /> Full Time
                <input type="radio" value="Part Time" checked={this.state.selectedOption === "Part Time"} onChange={this.onValueChange} /> Part Time
          </label>
          </div>
          <br></br>
          <div className='radio'>
          <label> Transfer Student:
                <input type="radio" value="Yes" checked={this.state.selectedOption === "Yes"} onChange={this.onValueChange} /> Yes
                <input type="radio" value="No" checked={this.state.selectedOption === "No"} onChange={this.onValueChange} /> No
          </label>
          </div>
          <br></br>
         <label>First Name:
                <input type="text" value={this.state.value} onChange={this.handleFirstNameChange} />
          </label>
          <br></br>
          <label>Last Name:
                <input type="text" value={this.state.value} onChange={this.handleLastNameChange} />
          </label>
          <br></br>
          <label>TU ID: 
                <input type="text" value={this.state.value} onChange={this.handleIDChange} />
          </label>
          <br></br>
          <label> Major: 
                <input type="text" value="Computer Science" readOnly="readonly"/>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
          </form>
          </div>
                <div class="col-1"></div>
          </div>  
    </body>

      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Questionaire/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();