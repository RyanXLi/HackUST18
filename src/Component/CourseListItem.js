/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';

class CourseListItem extends Component {
    constructor(props) {
        super(props)
        this.style = {
            div: {
                fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
                //fontSize: '16px',
                textAlign: 'center',
            }
        }
        this.courseName = "LOVE 1010"//TODO
    }


    render() {
        return (
            <div style={this.style.div}>
                {this.courseName}
            </div>
        )
    }
}

export default CourseListItem;