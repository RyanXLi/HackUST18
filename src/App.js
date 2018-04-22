import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Icon, Modal, Input} from 'semantic-ui-react';
import AV from 'leancloud-storage';

import CatalogPage from './Component/CatalogPage'
import BecomeTutorPage from './Component/BecomeTutorPage'
import MainPage from './Component/MainPage'

class App extends Component {
  constructor(props) {
    super(props);
    AV.User.logIn('jojo', '12345678').then(function (loginedUser) {
      console.log(loginedUser);
    }, function (error) {
      console.log(error);
    });
    this.state = {
      login: false,
      name: "jojo",
    }
        this.style = {
            blank: {
                height: '50px'
            }
        }
  }
  renderLogin() {
    if (this.state.login) {
      return this.state.name;
    }
    else {
      return (
        <div>
          <ModalBasicExample
            className="login"
            callback={() => this.Log()}
            name="login"
            content="Login Form"
          />
          <ModalBasicExample
            className="sign"
            callback={() => this.Log()}
            name="sign up"
            content="Sign Up Form"
          />
        </div>
      )
    }
  }

  Log() {
    this.setState({login: true})
    console.log("hahah");
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <div className="App-Title">
                <h1 className="App-title">Welcome to React</h1>
                <div className="Butts">
                  {this.renderLogin()}
                </div>
              </div>
              <div className="Nav">
                <Link className="Nav-item" to="/">MainPage</Link>
                <Link className="Nav-item" to="/catalog">CatalogPage</Link>
                <Link className="Nav-item" to="/becomeTutor">Become Tutor</Link>
                <Link className="Nav-item" to="/myArrangement">My Arrangements</Link>
                <Link className="Nav-item" to="/personalInfoPage">Personal</Link>
                <Link className="Nav-item" to="/topics">Topics</Link>
              </div>
            </header>
              <div style={this.style.blank}></div>
            <Route exact path="/" component={MainPage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/becomeTutor" component={BecomeTutorPage} />
            <Route path="/myArrangement" component={MyArrangementPage} />
            <Route path="/personalInfoPage" component={PersonalInfoPage} />
            <Route path="/topics" component={Topics}/>
          </div>
        </Router>
      </div>
    );
  }
}

/*
const MainPage = () => (
  <div>
    <h2>MainPage</h2>
  </div>
);
*/
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

const MyArrangementPage = () => (
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


class ModalBasicExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
      return (
          <Modal trigger={<Button>{this.props.name}</Button>} basic size='small' style={{margin: "auto"}} closeIcon>
            <Header icon='archive' content={this.props.content} />
            <Modal.Content>
              <Input focus placeholder='User Name'/>
              <br/>
              <br/>
              <Input focus placeholder='Password' type="password" />
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' inverted onClick={this.props.callback}>
                <Icon name='checkmark' /> Submit
              </Button>
            </Modal.Actions>
          </Modal>);

  }
}

export default App;
