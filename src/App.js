import React, { Component } from 'react';
import './App.css';

class App extends Component {



  submit(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)){
      console.log('email:', document.getElementById('email').value);
      console.log('interests:', document.getElementById('interests').options[document.getElementById('interests').options.selectedIndex].text);
      document.getElementById('error').hidden = true;
      document.getElementById('button').innerHTML = 'Submitting...';
      setInterval(function(){ 
        document.getElementById('signup').hidden = true;
        document.getElementById('thankYou').hidden = false;
        }, 2000);
    } else {
      console.log('fail');
      document.getElementById('error').hidden = false;
      document.getElementById('email').style.border = '1px solid #D02035';
    }  
  }

  
  componentDidMount(){
    document.getElementById('signup').hidden = false;
  }

  render() {
    return (
      <div>
      <div id='thankYou' hidden>
        <header>
          INTENRSHIP SIGNUP FORM
        </header>
        <div id='redLine'>
        </div>
        <div>
          <p className='thanks'>Thanks for your interest!</p>
          <p>We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings.</p>
        </div>
      </div>
      <div id='signup' hidden>
        <header>
          INTENRSHIP SIGNUP FORM
          
          
        </header>
        <div id='redLine'>
        </div>
        <div>
          <p id='prepare'>Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
          <form onSubmit={this.submit}>
            <div className='innerForm'>
              <div id='hidden'>
                <p id='error' hidden>Please enter a valid email address.</p>
              </div>
              <div className='inputs'>
                <input type='text' id='email' ref='email' placeholder='Your Email Address' />
                <select name='interests' id='interests'>
              
                  <option id='disabledOption' value="" selected disabled hidden>Your Interests</option>
                  <option value='Development'>Development</option>
                  <option value='Music'>Music</option>
                </select>
              </div>
              <div className='button'>
                <button id='button'>Sign Up Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
