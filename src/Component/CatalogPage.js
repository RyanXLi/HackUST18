/**
 * Created by RyanX on 2018/4/21.
 */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CourseList from 'CourseList';
import PersonList from 'PersonList';

class CatalogPage extends Component {

    constructor() {
        super()
        this.style = {
            bg: {

            }
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <CourseList />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <PersonList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            )
    }
}

export default CatalogPage
