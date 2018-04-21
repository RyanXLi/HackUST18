import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import './App.css';
import AV from 'leancloud-storage';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    const currentUser = AV.User.current();
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  Log() {
    console.log("hahah");
  }
/*
  renderLogin() {
    if (this.state.isLoggedIn) {
      return <div>{currentUser.getUsername()}</div>
    }
    else {
      return(
        <div>
          <ModalBasicExample loginCallback={()=>this.handleLoginClick()}/>
        </div>
      )
    }
  }

*/
  render() {
    return (
      <div className="App">
          <Button primary>Yo</Button>
        <Router>
          <div>
            <header className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <h1 className="App-title">Welcome to React</h1>
              <ModalBasicExample loginCallback={() => this.Log()}/>
              <div className="Nav">
                <Link className="Nav-item" to="/">MainPage</Link>
                <Link className="Nav-item" to="/catalog">CatalogPage</Link>
                <Link className="Nav-item" to="/becomeTutor">Become Tutor</Link>
                <Link className="Nav-item" to="/myArrangement">My Arrangements</Link>
                <Link className="Nav-item" to="/personalInfoPage">Personal</Link>
                <Link className="Nav-item" to="/topics">Topics</Link>
              </div>
            </header>
            <Route exact path="/" component={MainPage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/becomeTutor" component={BecomeLecturerPage} />
            <Route path="/myArrangement" component={MyArrangementPage} />
            <Route path="/personalInfoPage" component={PersonalInfoPage} />
            <Route path="/topics" component={Topics}/>
          </div>
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

const CatalogPage = () => (
  <div>
    <h2>CatalogPage</h2>
  </div>
);

const BecomeLecturerPage = () => (
  <div>
    <h2>BecomeLecturerPage</h2>
  </div>
);

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


const ModalBasicExample = (loginCallback) => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={() => loginCallback()}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={() => loginCallback()}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)


export default App;
