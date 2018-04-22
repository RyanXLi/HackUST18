import React, { Component } from 'react';
import {Grid, Button, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import profilePic from './profile.png';




class Profile extends Component {
    constructor(props) {
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
        this.Signature= 'qweq';
        this.Telephone= '123456';
        this.Credit= '25';
        this.SelfDescription = 'HI';


    }



    render() {
        return(
            <div>
            <div style={{height:120}}></div>

            <Grid>
                <Grid.Row style={{borderColor:'blue', height: 200}} >
                        <Grid.Column width={2}>

                        </Grid.Column>

                        <Grid.Column width={4}>


                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Grid.Row style={{height: 60}}></Grid.Row>
                            <h3 align="left">Signature:{this.Signature}</h3>
                            <h3 align="left">Telephone: {this.Telephone}</h3>
                        </Grid.Column>

                        <Grid.Column width = {5}>
                            <Grid.Row style={{height: 60}}></Grid.Row>
                            <h3>Credit: {this.Credit}</h3>
                        </Grid.Column>
                </Grid.Row>
                <Grid.Column width={2}></Grid.Column>
                <p align="left">Self-description :{this.SelfDescription}</p>
                <div style={this.style.blank}> </div>
                <Grid.Row height={2}></Grid.Row>

                <Grid.Row>
                <Grid.Column width = {8}>


                <div>

                    <Grid.Row width={8}>
                        <h1 > Comment1 </h1>
                    </Grid.Row>
                    <Grid.Row width={8}>
                        <h1 > Comment2</h1>
                    </Grid.Row>
                    <Grid.Row width={8}>
                        <h1 > Comment3 </h1>
                    </Grid.Row>


                {/*<BottomBar/>*/}
                </div>
              </Grid.Column>
              <Grid.Column width = {8}>
                  <h1 > Ratings</h1>

              </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default Profile;
