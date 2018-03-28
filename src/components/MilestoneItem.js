import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

export default class MilestoneItem extends Component {
    render() {
        return (
            <Row>
                <Input s={2} type='select' label="Milestone 1" defaultValue='1'>
                    <option value='1'>Marriage</option>
                    <option value='2'>House</option>
                    <option value='3'>Baby</option>
                </Input>
                <Input placeholder="" s={1} label="Age" />
            </Row>
        );
    }
}
