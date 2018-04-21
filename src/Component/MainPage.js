/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import { Icon, Modal, Button, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyHeader extends Component {

    constructor() {
        super()
        this.style = {
            bg: {

            }
        }
    }

    render() {
        return (
            <router>
                <div className="bg" style={this.style.bg}>
                    <icon />
                    <div className="Nav">
                        <Link className="Nav-item" to="/">MainPage</Link>
                        <Link className="Nav-item" to="/catalog">CatalogPage</Link>
                        <Link className="Nav-item" to="/becomeTutor">Become Tutor</Link>
                        <Link className="Nav-item" to="/schedule">Schedule</Link>
                    </div>
                </div>


                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/catalog" component={CatalogPage} />
                    <Route path="/becomeTutor" component={BecomeLecturerPage} />
                    <Route path="/myArrangement" component={MyArrangementPage} />
                    <Route path="/personalInfoPage" component={PersonalInfoPage} />
                    <Route path="/topics" component={Topics}/>
                </div>
            </router>)
    }
}

export default MyHeader
