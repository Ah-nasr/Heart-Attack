import React , {Component} from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './App.css';
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Portfolio from './Component/Portfolio'
import Profile from './Component/Profile'
import Socialmedia from './Component/Socialmedia'
import Work from './Component/Work'
import Index from './Component/Indexx'
import New_Patient from './Component/New_Patient'
import Add_Patient from './Component/Add_Patient'
import Result from './Component/Result'
import Login from './Component/Login'
import Signup from './Component/Signup'

import View from './Component/View'
import TestView from './Component/TestView'



class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" Component={Index}/>
    <Route path="/Contact" Component={Contact}/>
    <Route path="/New_Patient" Component={New_Patient}/>
    <Route path="/Add_Patient" Component={Add_Patient}/>
    <Route path="/Result" Component={Result}/>
    <Route path="/Login" Component={Login}/>
    <Route path="/Signup" Component={Signup}/>
    <Route path="/View" Component={View}/>
    <Route path="/TestView" Component={TestView}/>
    </Routes>
    </BrowserRouter> 
  )}
}

export default App;
