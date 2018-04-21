/**
 * Created by RyanX on 2018/4/22.
 */
import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Image } from 'semantic-ui-react'

const options = [
    { key: 'c', text: 'COMP2611', value: 'COMP2611' },
    { key: 'h', text: 'HUMA2840', value: 'HUMA2840' },
    { key: 'l', text: 'LOVE1010', value: 'LOVE1010' },
    { key: 'e', text: 'COOK1010', value: 'COOK1010' },
    { key: 'a', text: 'Add More', value: 'Add More' },
]

class BecomeTutorPage extends Component {
    state = {}

    constructor() {
        super()
        this.style = {
            bg: {
                textAlign: 'left',
                paddingLeft: '50px',
                paddingRight: '50px',
            },
            right: {
                textAlign: 'center',
                paddingLeft: '10px',
                paddingRight: '10px',
            }
        }
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div style={this.style.bg}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form>

                                    <Form.Field control={Input} label='First name' placeholder='First name' />
                                    <Form.Field control={Input} label='Last name' placeholder='Last name' />
                                    <Form.Field control={Input} label='Student ID' placeholder='Student ID' />
                                    <Form.Field control={Select} label='Course' options={options} placeholder='Course' />
                                    <Form.Field control={Input} label='TimeSlot' placeholder='e.g. 2018/06/05_22:00-23:00 ' />

                                <Form.Group inline>
                                    <label>Certification Type</label>
                                    <Form.Field control={Radio} label='Transcript' value='1' checked={value === '1'} onChange={this.handleChange} />
                                    <Form.Field control={Radio} label='Exam Results' value='2' checked={value === '2'} onChange={this.handleChange} />
                                    <Form.Field control={Radio} label='Teaching Career' value='3' checked={value === '3'} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Field control={TextArea} label='Description' placeholder='Describe why you are capable and attach the proof file ' />
                                <Form.Field control={TextArea} label='Description' placeholder='Describe what you are going to teach ' />
                                <Form.Field control={Checkbox} label='I guarantee that all the information above is true' />
                                <Form.Field control={Button}>Submit</Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <div style={this.style.right}>
                                <Image src='https://image.flaticon.com/icons/png/512/206/206864.png' size='large' />
                                <br/>
                                <Button primary>Upload Image</Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default BecomeTutorPage
