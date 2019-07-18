import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Summary from "./Summary"
import {Link} from "react-router-dom"
import "./Resume.css"


class Resume extends Component {
  render() {
    return(
      <div className="resume-cp">
        
        <Grid>
          
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              {/* <img
                src="https://rovinox3.s3.amazonaws.com/bucketFolder/1557503584256-lg.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Mark Nagel</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a full-Stack developer specializing in JavaScript, react and node just to name a few. I am passionate about creating complex applications. I love solving problems and tackle challenges thru the most efficient and creative path. Also, love pair programming and collaborating with other developers.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>North Dallas area</p>
            <h5>Phone</h5>
            <p>(817) 812-8086</p>
            <h5>Email</h5>
            <p>mark_nagel@hotmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <Link to="/contact">
              <button className="loop-btn">Let's Connect</button>
            </Link>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Summary</h2>
            <Summary/>

            <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                schoolName="Front-End"
                schoolDescription="HTML | CSS | JAVASCRIPT | REACT | REDUX | REACT HOOKS | TYPESCRIPT"
              />  
              <Skills
                schoolName="Back-End/Database"
                schoolDescription="NODE.JS | EXPRESS | SQL | AWS S3 | AUTHENTICATION "
              />  
              <Skills
                schoolName=" OtherTools"
                schoolDescription="GIT | SSH | VS Code | UIPath"
              />

               
          

                 


          <hr style={{borderTop: '3px solid white'}} />

           

               
                

              <h2>Experience</h2>

            <Experience
              startYear="March 2012 "
              endYear="April 2019"
              jobtitle="Senior Business Analyst"
              jobName="CoreLogic"
              list1="Prioritize development efforts for CondoSafe project."
              list2="Create and present development requirements to DevOps."
              list3="Lead daily SCRUM meetings between DevOps and Product stakeholders."
              list4="Lead User Acceptance Testing efforts."
              />

            <Experience
              startYear="March 2010 "
              endYear="December 2011"
              jobtitle="Senior Business Analyst"
              jobName="Medco"
              list1="Executive level reporting and data management."
              list2="Lead efforts to automate monotonous manual operations."
              // list3="Lead daily SCRUM meetings between DevOps and Product stakeholders."
              // list4="Lead User Acceptance Testing efforts."
              />

             <hr style={{borderTop: '3px solid white'}} />

                 <h2>Education</h2>


                <Education
                    
                    startYear="April 2019 "
                     endYear="- July 2019"
                    schoolName="DevMountain - Dallas, TX"
                    schoolDescription="13 week Web Development immersive"
                />
                <Education
                    
                    startYear="Oct 1998 "
                     endYear="- Mar 2000"
                    schooltitle="NorthLake Community College - Irving, TX"
                    schoolDescription="Computer Science"
                />
              
              {/* <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
