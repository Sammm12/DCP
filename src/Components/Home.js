import ReactDOM from 'react-dom/client';
import './CSS/Home.css';
import logo from './img/Favicon.png'; 
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


  function Home() {
    return (
    <body>
        <nav class="navbar justify-content-center">
            <a href="#" class="navbar-brand">
                <img src={logo} alt="Logo - Image" width="400" height="100" class = "logo"/>
            </a>
        </nav>
    
        <div class="container">
        <div class="row row2 align-items-center">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 offset-1">
                <div class="text-center">
                    <h5>Work On Previous Sheet</h5>
                    <button class="col-lg-12" onclick="location.href='../HTML/board.html';">Continue</button>
                </div>

                <div class="strike">
                    <span>OR</span>
                </div>

                <div class="text-center">
                    <h5>Upload New Excel Sheet</h5>
                    <button class="col-lg-12">Upload</button>
                </div>
            </div>

            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 offset-1" id="questionaire2">
                <h1 class="text-center">Please Select All the Courses You Have Taken</h1>


                <div class="row" id="courseListColumns">
                    <div class="col-lg-6" id="courseListColumnA">

                        <div class="row" id="colArow1">
                            <div class="col-lg-6 text-center">
                                <p>COSC 131</p>
                            </div>
                            <div class="col-lg-6 text-left">
                                
                               <form>
                                    <input type="radio" name="colArow1FieldSet" value="Yes" id="row1Yes"/>
                                    <label for="row1Yes">Yes</label>

                                 

                                    <input type="radio" name="colArow1FieldSet" value="No" id="row1No"/>
                                    <label for="row1No">No</label>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6" id="courseListColumnB">
                        <div class="row" id="colBrow1">
                            <div class="col-lg-6 text-center">
                                <p>COSC 131</p>
                            </div>

                            <div class="col-lg-6 text-left">
                                <fieldset id="colBrow1FieldSet">
                                    <input type="radio" name="colBrow1FieldSet" id="colBrow1Yes"/>
                                    <label for="colBrow1Yes">Yes</label>

                        

                                    <input type="radio" name="colBrow1FieldSet" id="colBrow1No"/>
                                    <label for="colBrow1No">No</label>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();