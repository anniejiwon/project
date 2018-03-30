import React, { Component } from 'react';
import { Button, Row, Input, Card, Col, Slider, Slide } from 'react-materialize';
import styles from '../style.css';

export default class QuestionnaireItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(evt) {
        this.setState({value: evt.target.value});
    }
    render() {
        const { handleValue } = this.props.handleValue;
        return (
            <span className={styles.questionnaireItemContainer}>
                <span className={styles.questionnaireItemQuestion}>
                  Let's start with something simple!<br />What is your name?
                </span>
                <div className={styles.questionnaireItemValue}>
                    <Input placeholder={this.state.value} l={12} label="" handleValue={handleValue} onChange={this.handleValueChange}/>
                    <div>
                        <Button waves='light' onClick={() => this.props.handleValue(this.state.value)}>Next</Button>
                    </div>
                </div>
            </span>
        );
    }
}
