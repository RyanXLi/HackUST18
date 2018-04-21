/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';

class PersonListItem extends Component {
    constructor(props) {
        super(props)
        this.style = {
            div: {
                fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                fontSize: '24px',
                textAlign: 'center',
            }
        }
        this.personName = "Zong ZHAO"//TODO

    }



    render() {
        return (
            <div style={this.style.div}>
                {this.personName}
            </div>
        )
    }
}

export default PersonListItem;