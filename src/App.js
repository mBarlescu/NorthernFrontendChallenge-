import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  submit(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)){
      console.log('success');
      document.getElementById('error').hidden = true;
      document.getElementById('button').innerHTML = 'Submitting...';
    } else {
      console.log('fail');
      document.getElementById('error').hidden = false;
      document.getElementById('email').border = 'red';
    }  
  }
  render() {
    return (
      <div className="App">
        <header>
          INTENRSHIP SIGNUP FORM
          
          <hr />
        </header>

        <div>
          <p>Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
          <form onSubmit={this.submit}>
            <div class='innerForm'>
              <div id='hidden'>
                <p id='error' hidden>Please enter a valid email address.</p>
              </div>
              <div class='inputs'>
                <input type='text' id='email' ref='email' placeholder='Your Email Address' />
                <select name='interests' id='interests'>
              
                  <option id='disabledOption' value="" selected disabled hidden>Your Interests</option>
                  <option value='Development'>Development</option>
                </select>
              </div>
              <div class='button'>
                <button id='button'>Sign Up Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
