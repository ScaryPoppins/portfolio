import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Summary extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}  {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <ui>
              <li>•	15+ years analyst experience including positions within management and development support.  </li>
              <br></br>
              
              <li>Motivated to produce performant and robust software; highly passionate about programming</li>
              <br></br>

              <li>Experience working on the complete SDLC including creating, design, documentation, development and unit testing of applications. </li>
              <br></br>

              <li>Self-motivated, easily adaptable to new environments and the ability to work independently as well as in groups. </li>
              <br></br>
              
              <li>Sharp eye for details and ability to spot and deviations, abnormalities, and anomalies. </li>

          </ui>
        </Cell>
      </Grid>
    )
  }
}

export default Summary;
