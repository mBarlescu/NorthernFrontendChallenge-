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
      document.getElementById('hidden').hidden = true;
    } else {
      console.log('fail');
      document.getElementById('hidden').hidden = false;
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
            <p id='hidden' hidden>dude</p>
            <input type='text' id='email' ref='email' placeholder='Your Email Address' />
            <input type='text' placeholder='Your Interests' />
            <button>Sign Up Now</button>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
