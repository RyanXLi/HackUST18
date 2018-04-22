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

            }
        }
    }

    render() {
        return (
            <div style={this.style.bg}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <CourseList />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <PersonList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            )
    }
}

export default CatalogPage
