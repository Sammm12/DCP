import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/DCPBoard.css';
import logo from './img/Favicon.png'; 
import leftarrow from './img/arrow-left-circle.svg';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


  function DCPBoard() {
    return (
        <body>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a id="backbtn" href="../HTML/index.html">
                    <img src={leftarrow} width="32" height="32"/>
                </a>
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="logo" class = 'logo'/>
                </a>
              <div class="collapse navbar-collapse">
                  <p id="user">Hello Gerardo Vargas-Hernandez!</p>
              </div>
            </div>
          </nav>
        
          <div id="main" class="row row-cols-1 row-cols-md-3 g-9">
            <div id="proto" class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center">Spring 2022</h5>
                    </div>
                    
                    <table class="table table-bordered">
                        <thead> </thead>
                        <tbody>
                            <tr>
                                <th>Course</th>
                                <th>Credit</th>
                            </tr>
                            <tr>
                                <td>COMM 100</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>MATH 273</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>COSC 289</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>COSC 229</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>MATH 329</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>COSC 334</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        
            <div id="proto1" class="col">
                <div onclick="location.href='../HTML/ui-semesterboard.html';" class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center">Spring 2022</h5>
                    </div>
                    <table class="table table-bordered">
                        <thead> </thead>
                        <tbody>
                            <tr>
                                <th>Course</th>
                                <th>Credit</th>
                            </tr>
                            <tr>
                                <td>COMM 100</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>MATH 273</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>COSC 289</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>COSC 229</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>MATH 329</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>COSC 334</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                      </table>
                </div>
                <img onclick="removeThis()" class="remOverlay" src="../Res/Images/dash-circle-fill.svg" width="32" height="32" color="white"/>
            </div>

            ‎


<div id="addOne" class="col">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-center placeholder"></h5>
            
        </div>
        <table class="table table-bordered">
            <thead> </thead>
            <tbody>
                <tr>
                    <th>‎</th>
                    <th>‎</th>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
                <tr>
                    <td>‎</td>
                    <td>‎</td>
                </tr>
            </tbody>
          </table>
    </div>

    <img onclick="myFunction()" class="overlay" src="../Res/Images/plus-circle-fill.svg" width="80" height="80" color="white"/>
</div>


</div>

<button id="rightBtn" type="button" class="btn btn-warning">Export to .csv</button>
<button id="leftBtn" type="button" class="btn btn-outline-warning disabled">Total Credits: 1</button>


    </body>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DCPBoard/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();