import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Menu, Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import CatalogPage from './Component/CatalogPage'
import BecomeTutorPage from './Component/BecomeTutorPage'
import logo from './Assets/logo.svg'

class App extends Component {
    constructor() {
        super()
        this.style = {
            leftMenu: {
                backgroundColor: '#6495ED',
                position:'absolute',
                top: "0",
                bottom: '0',
                width: '100%',
            },
            grid:{
                height: '900px',
            },
            gridCol:{
                paddingLeft: '0px',
                paddingRight: '0px',
            },
            menuItem:{
                height: '17%',
                textAlign: 'center',

                // flex box
                display: '-ms-flexbox',
                display: '-webkit-flex',
                display: 'flex',

                msFlexAlign: 'center',
                webkitAlignItems: 'center',
                webkitBoxAlign: 'center',
                alignItems: 'center',
                justifyContent:'center',

            },
            logo: {
                // height: '200px',
                bgColor:'#87CEFA',
            },
            link:{
                // position: 'relative',
                // top: '50%',
                // transform: 'translateY(-50%)',
                textAlign: 'center',
                fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                fontSize: '20px',
                color: '#ffffff',
            },

            rightCol: {

            },
            rightTopBox: {
                paddingTop: '40px',
                paddingBottom: '40px',
            },
            search: {

            },
            leftAlign: {
                paddingLeft: '65px',
                paddingRight: '65px',
                // flex box
                display: '-ms-flexbox',
                display: '-webkit-flex',
                display: 'flex',

                msFlexAlign: 'right',
                webkitAlignItems: 'right',
                webkitBoxAlign: 'right',
                alignItems: 'right',
                justifyContent: 'right',
            }
        }
    }
  render() {
    return (
      <div className="App" >
        <Router>
          <Grid style={this.style.grid}>
            <Grid.Row>

                  <Grid.Column width={4} style={this.style.gridCol}>
                      <Menu style={this.style.leftMenu} pointing vertical borderless>
                          <Menu.Item style={this.style.menuItem} borderless onClick={(e)=>{}}>
                              <div className="logo" >
                                  {/*<img src={logo} />*/}
                              </div>
                          </Menu.Item>
                          <Menu.Item style={this.style.menuItem} borderless onClick={(e)=>{}}>
                              <Link to="/" style={this.style.link}>Introduction</Link>
                          </Menu.Item>
                          <Menu.Item style={this.style.menuItem} borderless onClick={(e)=>{}}>
                              <Link to="/catalog" style={this.style.link}>Catalog</Link>
                          </Menu.Item>
                          <Menu.Item style={this.style.menuItem} borderless onClick={(e)=>{}}>
                              <Link to="/becomeTutor" style={this.style.link}>Become A Tutor</Link>
                          </Menu.Item>
                          <Menu.Item style={this.style.menuItem} borderless onClick={(e)=>{}}>
                              <Link to="/schedule" style={this.style.link}>Schedule</Link>
                          </Menu.Item>
                        {/*<Link className="Nav-item" to="/personalInfoPage">Personal</Link>*/}
                      </Menu>
                  </Grid.Column>
                  <Grid.Column width={12} style={this.style.rightCol}>
                      <div style={this.style.rightTopBox}>
                          <Grid>
                              <Grid.Row>
                                  <Grid.Column width={13} style={this.style.leftAlign}>
                                    <Search size="large" style={this.style.search}/>
                                  </Grid.Column>
                                  <Grid.Column width={3}>

                                  </Grid.Column>
                              </Grid.Row>
                          </Grid>
                      </div>
                      <div>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/catalog" component={CatalogPage} />
                        <Route path="/becomeTutor" component={BecomeTutorPage} />
                        <Route path="/schedule" component={Schedule} />
                      </div>
                  </Grid.Column>
            </Grid.Row>
          </Grid>
        </Router>
      </div>
    );
  }
}

const MainPage = () => (
  <div>
    <h2>MainPage</h2>
  </div>
);

// const CatalogPage = () => (
//   <div>
//     <h2>CatalogPage</h2>
//   </div>
// );

// const BecomeLecturerPage = () => (
//   <div>
//     <h2>BecomeLecturerPage</h2>
//   </div>
// );

const Schedule = () => (
  <div>
    <h2>MyArrangementPage</h2>
  </div>
);


const PersonalInfoPage = () => (
  <div>
    <h2>PersonalInfoPage</h2>
  </div>
);



const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


export default App;
