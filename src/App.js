import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Components/SignUp';
import Questionaire from './Components/Questionaire';
import Home from './Components/Home';
import SemsterBoard from './Components/SemesterBoard';
import CourseInfo from './Components/CourseInfo';
import { BrowserRouter, Route } from 'react-router-dom';


const SignUp = () => (
  < SignUp/>
)

const Questionaire = () => (
  < Questionaire/>
)
const Home = () => (
  < Home/>
)
const SemesterBoard = () => (
  < SemesterBoard/>
)
const CourseInfo = () => (
  < CourseInfo/>
)

const PageNotFound= () => (
  <div>404!</div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path = "/"> component = {SignUp} exact = {true}</Route>
        <Route path = "/Questionaire"> component = {Questionaire}</Route>
      </Switch>
    </div>
  </BrowserRouter>
)



