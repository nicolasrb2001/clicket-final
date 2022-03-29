import React from 'react';

import './App.css';
import Header from './components/header'

import Banner from './components/Banner'
import About from './components/About'




export const Profile = (props) => {
  return (
    <div className="App">
      <Header />
      <hr />
      
      <Banner setProfile = {props.setProfile} profile = {props.profiles}/> 
      <br />
      <About />
      <br />
      <hr />
      

    </div>
  );
};

