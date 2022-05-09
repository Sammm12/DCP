import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/SemesterBoard.css';
import logo from './img/Favicon.png'; 
import leftarrow from './img/arrow-left-circle.svg';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var SemesterData = { 
    semster: 'Fall 2018',
    subject: ['COSC 236', 'MATH 273', 'TSEM 102', 'COMM 131'],
    code: [236, 273, 102, 131],
    credits: [4, 4, 3, 3]
  };

  function Course(props){
    return <div class="col-sm Course text-left"><button class="btn btn-danger btn-sm" type="button">-</button> {props.coursesubject} {props.coursecode}</div>
  }
  function Credit(props){
    return <div class="col-sm ClassCredits">{props.coursecredit}</div>
  }
  
  function SemesterLayout() {
    var CurrentSemester = SemesterData.semster;
    var Subjects = SemesterData.subject;
    var Codes = SemesterData.code;
    var CreditCourse = SemesterData.credits;
    return (
      <body class="SemesterBoard">
      <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">
                  <img class = "logo" src={logo} alt="DCP+"/>
              </a>
              <a id="backbtn" href="../HTML/board.html">
                  <img src={leftarrow} alt="back"width="32" height="32"/> 
              </a>
              
            <div class="collapse navbar-collapse ">
                <p id="user">Hello  Gerardo Vargas-Hernandez!</p>
            </div>
          </div>
      </nav>
      <span></span>
      <div class="container-sm gap-3 Table">
        <div class="row">
            <div class="col-md Semester">{CurrentSemester}</div>
            <div class="col-md SemesterCredits">Credits: 15</div>
        </div>
        <div class="row">
            <div class="col-sm Subheading">Course</div>
            <div class="col-sm Subheading">Credits</div>
        </div>
        <div class="row">
       
            <div class="col-sm Course text-left">{Subjects.map((subject) => <Course coursesubject={subject}/>)}</div>
            {/* {Codes.map((code) => <Course coursecode={code} />)} */}
    
            <div class="col-sm ClassCredits">{CreditCourse.map((credit) => <Credit coursecredit={credit} />)}</div>
        </div>
        
        <div class="row">
            <div class="col text-center">
                <div><button class="btn btn-success btn-sm" onclick="on();" type="button">+</button></div>
            </div>
        </div>
    </div>
    </body>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SemesterLayout/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();