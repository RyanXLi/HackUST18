/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CourseList from './CourseList';
import PersonList from './PersonList';

class CatalogPage extends Component {

    constructor() {
        super()
        this.style = {
            bg: {
                paddingLeft: '50px',
                paddingRight: '50px',
                fontSize: '16px'
            }
        }
    }

    render() {
        return (
            <div style={this.style.bg}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <CourseList />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <PersonList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            )
    }
}

export default CatalogPage
