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
                height: '470px',
                // paddingLeft: '0',
                paddingRight: '-14px',
                boxShadow: '0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)',
                border: '1px solid rgba(34,36,38,.15)'
            },

            item: {
                padding: '10% 5%',
                height: '12.5%',
                position: 'relative',
            }
        }
        this.activeItem = 0
        this.activeColor = '#ffff00'
        this.regularColor = '#00ffff'
    }


    getStyle(index) {
        // TODO: distinguish better
        if (index === this.activeItem) {
            return Object.assign({}, this.style.item,
                {backgroundColor: this.activeColor},
            )
        } else {
            return Object.assign({}, this.style.item,
                {backgroundColor: this.regularColor})
        }
    }


    render() {
        return (
            <Menu pointing vertical style={this.style.menu} fluid>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((x, i) =>
                    <Menu.Item key={x.toString()} name={x.toString()} active={this.activeItem === x}
                               style={this.getStyle(x)} onclick={((e) => this.activeItem = x).bind(this)}>
                        <PersonListItem id={x}/>
                    </Menu.Item>
                )}
            </Menu>

        )
    }
}


export default CourseList