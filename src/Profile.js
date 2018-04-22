import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import profilePic from './profile.png';
import AV from 'leancloud-storage';



class Profile extends Component {
    constructor(props) {
        const currentUser = AV.User.current();
        super(props)
        this.style = {
            content: {
                position: 'relative',
                padding: '0 3% 0 3%'
            },
            blank: {
                height: '50px'
            },
            pic : {
                backgroundImage: "url('./profile.png')"
            }
        }
        this.Username=currentUser.getUsername();
        this.Email= currentUser.getEmail();
        this.Credit= currentUser.get('credit');
        this.SelfDescription = currentUser.get('description');


    }



    render() {
        return(
            <div>
                <div style={{height:60}}></div>

                <Grid>
                    <Grid.Row style={{borderColor:'blue', height: 200}} >


                        <Grid.Column width={5}>

                            <img style={{width: 150, height: 150}} src = {profilePic} />

                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Grid.Row style={{height: 10}}></Grid.Row>
                            <h3 align="left">User name:{this.Username}</h3>
                            <h3 align="left">E-mail: {this.Email}</h3>
                        </Grid.Column>

                        <Grid.Column width = {5}>
                            <Grid.Row style={{height: 10}}></Grid.Row>
                            <h3>Credit: {this.Credit}</h3>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width = {1}></Grid.Column>
                        <Grid.Column width = {8}>
                            <p align="left">Self-description :{this.SelfDescription}</p>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row style={{height:50}}></Grid.Row>

                    <Grid.Row>
                        <Grid.Column width = {8}>

                            <Grid.Row>
                              <h1 >My Comments</h1>
                            </Grid.Row>

                            <Grid.Row style={{height:30 }}></Grid.Row>

                            <Grid.Row width={8}>
                                <h4 > Comment1 </h4>
                            </Grid.Row>
                            <Grid.Row width={8}>
                                <h4 > Comment2</h4>
                            </Grid.Row>
                            <Grid.Row width={8}>
                                <h4 > Comment3 </h4>
                            </Grid.Row>



                        </Grid.Column>
                        <Grid.Column width = {8}>
                            <h1 > My Ratings</h1>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Profile;