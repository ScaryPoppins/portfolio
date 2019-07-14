import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobtitle}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.jobName}</h6>
          {/* <p>{this.props.jobDescription}</p> */}
          <ul>

            {this.props.list1 ? <li> {this.props.list1} </li>: false}

            {this.props.list2 ? <li> {this.props.list2} </li>: false}

            {this.props.list3 ? <li> {this.props.list3} </li>: false}

            {this.props.list4 ? <li> {this.props.list4} </li>: false}
            
          </ul>

        </Cell>
      </Grid>
    )
  }
}

export default Experience;
