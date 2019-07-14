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
            <CardTitle 
            style={{ height: '176px', background: `url(https://texashuntingforum.com/forum/pics/userpics/2019/07/full-31680-193560-slow_shop2.jpg) center / cover`}} 
            >
            </CardTitle>
            <CardText>
               <h2>Texas Slow Speed Shop</h2>
              <h5>Developed a user based E-commerce site to buy and sell products with 2 week deadline.</h5>
              <ul>
                <li>Bcript.js to secure user login credentials and PostgreSQL to store the data.</li>
                <li>React and redux in the front-end to work with data. </li>
                <li>Google API to create interactive map with marker. </li>
                <li>Stripe API to accept payment from user. </li>
                <li>Learned and utilized Material-UI quickly </li>
                <li>Responsible for React UI and architecture.</li>

              </ul>
              
            </CardText>
            <CardActions border className="Card-Actions">
            
             <a href="https://github.com/ScaryPoppins/Texas-SlowLab-Performance" rel="noopener noreferrer" target="_blank">
             <button className="btn-project" >GitHub</button>
             </a>
             
             <a href="http://67.205.191.153:4567/#/" rel="noopener noreferrer" target="_blank">
             <button className="btn-project">Website</button>
             </a> 
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>

          <Card  shadow={5} style={{minWidth: '450', margin: ' 30px auto',borderRadius: "10px"}}>
            <CardTitle style={{ height: '176px', background: 'url(https://files.slack.com/files-pri/T039C2PUY-FL255MJR0/image_from_ios.png) center / cover'}} >
            </CardTitle>
            <CardText>
               <h2>Welp'em</h2>
              <h5>Yelp for businesses - Review your customers</h5>
              <h6>React, material-ui, redux, node, express, bcrypt, react hooks</h6>
              <ul>
                <li>Group project that was completed in two weeks</li>
                <li>Worked heavily with the google map places and geocoding API</li>
                <li>Led group in several breakout sessions regarding the best approach to challenges throughout the project </li>
                <li>Entire project created in react hooks</li>
                <li>Was built mobile-first as to more strongly appeal to the main demographic </li>
                

              </ul>
              
            </CardText>
            <CardActions border className="Card-Actions">
            
             <a href="https://github.com/welpem/welp" rel="noopener noreferrer" target="_blank">
             <button className="btn-project" >GitHub</button>
             </a>
             
             <a href="http://welp-em.com/" rel="noopener noreferrer" target="_blank">
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
