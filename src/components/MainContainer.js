import React, { Component } from 'react';
import MilestoneContainer from './MilestoneContainer';
import TimelineContainer from './TimelineContainer';


export default class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <MilestoneContainer />
                <TimelineContainer />
            </div>
        );
    }
}