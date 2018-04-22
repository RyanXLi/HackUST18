/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import { Menu  } from 'semantic-ui-react';
import CourseListItem from './CourseListItem'
import PersonListItem from "./PersonListItem";


class CourseList extends Component {

    constructor(props) {
        super(props)
        this.style = {
            menu: {
                // position: 'relative',
                overflowX: 'hidden',
                overflowY: 'auto',
                height: '700px',
                // paddingLeft: '0',
                paddingRight: '-14px',
                // boxShadow: '0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)',
                // border: '1px solid rgba(34,36,38,.15)'
            },

            item: {

            },

            active: {
                backgroundColor: '#ffff00',
            },

            nonActive: {
                backgroundColor: '#00ffff',
            },


        }

    }



    makeOnClick(x) {
        return function (e) {
            console.log("fuuuuuuuuuuuuuck")

        }
    }


    render() {
        return (
            <Menu pointing vertical style={this.style.menu} fluid>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13, 14,15,16, 17,18].map((x, i) =>
                    <Menu.Item key={x.toString()} name={x.toString()} active={this.activeItem === x}
                               style={this.style.item } onClick={this.makeOnClick(x).bind(this)}>
                        <CourseListItem id={x}/>
                    </Menu.Item>
                )}
            </Menu>

        )
    }
}


export default CourseList