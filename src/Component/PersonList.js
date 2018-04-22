/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import PersonListItem from './PersonListItem'


class PersonList extends Component {

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
            },

            active: {
                color: '#ffff00'
            },

            nonActive: {
                color: '#00ffff'
            }

        }
        this.setState({activeItem: 0})
    }


    makeOnClick(x) {
        return function (e) {
            this.setState({activeItem: x})
        }
    }



    render() {
        return (
            <Menu pointing vertical style={this.style.menu} fluid>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((x, i) =>
                    <Menu.Item key={x.toString()} name={x.toString()}
                               style={this.activeItem === x ? this.style.active : this.style.nonActive } onClick={this.makeOnClick(x).bind(this)}>
                        <PersonListItem id={x}/>
                    </Menu.Item>
                )}
            </Menu>

        )
    }

// <Popup
// trigger={
//     <Menu.Item key={x.toString()} name={x.toString()} active={activeItem === x} style={this.getStyle(x)} onClick={this.makeOnClick(x).bind(this)}>
//         <SemesterBarItem id={x}/>
//     </Menu.Item>
// }
// flowing
// hoverable
// >
// <ColorPicker
// store={this.props.store}
// index={x.toString()}
// key={x.toString()}
// />
// </Popup>
}


export default PersonList