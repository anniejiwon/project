import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import MilestoneItem from './MilestoneItem';

export default class MilestoneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            milestoneOne: null,
            milestoneTwo: null,
        };
        this.handleChangeMilestone = this.handleChangeMilestone.bind(this);
    }

    handleChangeMilestone() {
        console.log('---CLICK', this.state.milestoneOne);
        this.setState({
            milestoneOne: true
        });
    }

    render() {
        const { milestoneOne } = this.state;
        return (
            <div>
                <MilestoneItem handleChangeMileStone={this.handleChangeMilestone} />
                <MilestoneItem handleChangeMileStone={this.handleChangeMilestone} />
            </div>
        );
    }
}