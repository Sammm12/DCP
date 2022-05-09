import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/CourseInfo.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddCourse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          course: '',
          credit: '',
        };
  
      this.handleCourseChange = this.handleCourseChange.bind(this);
      this.handleCreditChange = this.handleCreditChange.bind(this);
    }
  
    handleCourseChange (event) {
      this.setState({coursel: event.target.value});
    }
    handleCreditChange (event) {
        this.setState({credit: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        return (
    <body>
        <div class="card position-absolute top-50 start-50 translate-middle text-center" >
            <div class="card-body">
                <h5 class="card-title">Enter Course Information</h5>
                <form class = "courseinfo" onSubmit={this.handleSubmit}>
      
         <label>Course: 
                <input type="text" value={this.state.value} onChange={this.handleCourseChange} />
          </label>
          <br></br>
          <label>Credit:
                <input type="text" value={this.state.value} onChange={this.handleCreditChange} />
          </label>
          <br></br>

          <input type="submit" value="Submit" />
          </form>
              </div>
        </div>
    </body>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddCourse/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();