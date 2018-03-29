import React, { Component } from 'react';
import { Button } from 'react-materialize';
import MilestoneItem from './MilestoneItem';
import '../style.css';

export default class MilestoneContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            milestoneOne: null,
            milestoneTwo: null,
        };
        this.handleChangeMilestone = this.handleChangeMilestone.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleChangeMilestone() {
        console.log('---CLICK', this.state.milestoneOne);
        this.setState({
            milestoneOne: true
        });
    }
    handleButtonClick() {
        console.log('---buttonclick');
    }

    render() {
        const { milestoneOne } = this.state;
        return (
            <div className="milestoneContainer" style={{width: '500px'}}>
                <MilestoneItem handleChangeMileStone={this.handleChangeMilestone} label={'Wedding'} />
                <MilestoneItem handleChangeMileStone={this.handleChangeMilestone} label={'Housing'}/>
                <Button floating small className='red' waves='light' icon='add' onClick={this.handleButtonClick} />
            </div>
        );
    }
}