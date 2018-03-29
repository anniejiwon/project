import React, { Component } from 'react';


export default class TimelineContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', width: '1000px', background: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{background: 'white'}}>THIS IS A PLACEHOLDER FOR THE TIMELINE</span>
            </div>
        );
    }
}