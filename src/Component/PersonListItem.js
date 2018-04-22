/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

class PersonListItem extends Component {
    constructor(props) {
        super(props)
        this.style = {
            div: {
                fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                //fontSize: '16px',
                textAlign: 'center',
            }
        }
        this.personName = "Zong ZHAO"//TODO

    }



    render() {
        return (
            <div style={this.style.div}>
                <Card>
                    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>
                            Matthew
                        </Card.Header>
                        <Card.Meta>
                    <span className='date'>
                      Joined in 2015
                    </span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default PersonListItem;