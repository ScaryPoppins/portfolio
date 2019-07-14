import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "./projects.css"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card  shadow={5} style={{minWidth: '450', margin: ' 30px auto',borderRadius: "10px"}}>
            <CardTitle style={{ height: '176px', background: 'url(https://rovinox3.s3.amazonaws.com/bucketFolder/1558990399545-lg.png) center / cover'}} >
            </CardTitle>
            <CardText>
               <h2>Rovinox</h2>
              <h5>Developed a user based E-commerce site to buy and sell products.</h5>
              <ul>
                <li>Bcript.js to secure user login credentials and PostgreSQL to store the data.</li>
                <li>Aws s3 to store uploaded files. </li>
                <li>React and redux in the front-end to work with data. </li>
                <li>Stripe API to accept payment from user. </li>
                <li>Implemented various Validation Controls for form validation and implemented custom validation controls using Object Oriented JavaScript. </li>
                <li>Responsible for React UI and architecture.</li>

              </ul>
              
            </CardText>
            <CardActions border className="Card-Actions">
            
             <a href="https://github.com/ScaryPoppins" rel="noopener noreferrer" target="_blank">
             <button className="btn-project" >GitHub</button>
             </a>
             
             <a href="http://rovinox.xyz" rel="noopener noreferrer" target="_blank">
             <button className="btn-project">Website</button>
             </a> 
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          <Card  shadow={5} style={{minWidth: '450', margin: ' 30px auto',borderRadius: "10px"}}>
            <CardTitle style={{ height: '176px', background: 'url(https://rovinox3.s3.amazonaws.com/bucketFolder/1560188679430-lg.png) center / cover'}} >
            </CardTitle>
            <CardText>
               <h2>TurboLog</h2>
              <h5>How to keep track of your car maintenance history</h5>
              <h6>react, material-ui, redux, node, express, bcrypt, react hooks</h6>
              <ul>
                <li>group project that was complated in two weeks</li>
                <li>Worked heavily with the google map places and geocoding API</li>
                <li>Led group in several breakout sessions regarding the best approach to challenges throughout the project </li>
                <li>Entire project created in react hooks</li>
                <li>Was built mobile-first as to more strongly appeal to the main demographic </li>
                

              </ul>
              
            </CardText>
            <CardActions border className="Card-Actions">
            
             <a href="https://github.com/turbolog/turbo-log" rel="noopener noreferrer" target="_blank">
             <button className="btn-project" >GitHub</button>
             </a>
             
             <a href="http://turbolog.xyz/#/" rel="noopener noreferrer" target="_blank">
             <button className="btn-project">Website</button>
             </a> 
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

         

          
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs> */}


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
