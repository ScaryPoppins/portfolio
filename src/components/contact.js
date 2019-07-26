import React, { Component } from 'react';
import axios from 'axios'

import "./contact.css"


class Contact extends Component {
  constructor(){
    super()
    this.state ={
      name:"",
      message:"",
      email:"",
      confirmation: false
    }
    this.handleConfirmationOpen = this.handleConfirmationOpen.bind(this);
    this.handleConfirmationClose = this.handleConfirmationClose.bind(this);
  }

  handleConfirmationOpen() {
    this.setState({confirmation: true})
  }

  handleConfirmationClose() {
    this.setState({confirmation: true})
  }

  handleInput = (e) =>{ 
    this.setState({[e.target.name]:e.target.value})
    console.log('e.target.value: ', e.target.value);
  }

  handleSubmit = (e) =>{
    e.preventDefault() 
    const {name,message,email} = this.state
    axios.post(`/api/email`,{name,message,email})
    }

  render() {
    console.log(this.state.confirmation)

    return(
      <div className="contact-page"> 

<div className="background-container">
<img  className="moon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
<div className="stars"></div>
<div className="twinkling"></div>
<div className="clouds"></div>
</div>


      
          <div className="box-b">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <div className="content-b">
             <h1>Let's Connect</h1>
             <div className="contact-content" >
              <form className="Message-form" onSubmit={this.handleSubmit}>
        
                <p>Name</p>
                <input name="name" onChange={this.handleInput} ></input>
                <br></br>
                <p>Message</p>
                <textarea onChange={this.handleInput} name="message" className="message-input" ></textarea>
                <br></br>
                <p>Email</p>
                <input onChange={this.handleInput} name="email" ></input>
                <br></br>
                <button  
                    type="submit" 
                    onSubmit={this.handleSubmit} 
                    className="send" 
                    onClick={this.handleConfirmationOpen}
                >Send
                </button>
            
              </form>

             </div>

           </div>
            
          </div>
      </div>

     
    )
  }
}

export default Contact;
