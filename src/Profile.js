import React, { Component } from 'react';
import {Grid, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';




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
                backgroundImage:'./logo.svg',
            }
        }
        this.Signature= 'qweq';
        this.Telephone= '123456';
        this.Credit= '25';


    }



    render() {
        return(
            <div>
            <div style={this.style.blank}></div>

            <Grid>
                    <Grid.Column width={4}>
                        <div  style = {this.style.pic}> </div>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <h3 align="left">Signature:{this.Signature}</h3>
                        <h3 align="left">Telephone: {this.Telephone}</h3>
                    </Grid.Column>
                    <Grid.Column width = {5}>
                        <h3>Credit: {this.Credit}</h3>
                    </Grid.Column>

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
            </Grid>
            </div>
        )
    }
}

export default Profile;