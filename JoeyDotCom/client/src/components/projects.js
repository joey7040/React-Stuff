import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Project from './project'

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
          <Project />

          {/* Project 2 */}
          <Project />
          {/* Project 3 */}
          <Project />
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid"><h1>This is Python</h1>
        
                  {/* Project 1 */}
                  <Project />
                  {/* Project 2 */}
                  <Project />
                  {/* Project 3 */}
                  <Project />
        
        </div>
      )

    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          {/* <Tab>VueJS</Tab> */}
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>


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
