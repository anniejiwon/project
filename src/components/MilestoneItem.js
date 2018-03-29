import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

export default class MilestoneItem extends Component {
    render() {
        const { label } = this.props;
        return (
            <Row>
                <Input s={8} type='select' label={label} defaultValue='1'>
                    <option value='1'>5,000 - 10,000</option>
                    <option value='2'>15,000 - 20,000</option>
                    <option value='3'>25,000 - 30,000</option>
                </Input>
                <Input placeholder="" s={3} label="Age" />
            </Row>
        );
    }
}
