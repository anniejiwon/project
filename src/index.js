import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Questionnaire from './components/Questionnaire';
import styles from './style.css';

export class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            marriage: null,
            house: null
        };
        this.handleValue = this.handleValue.bind(this);
    }
    handleValue(value) {
        this.setState({name: value});
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.header}>PROJECT: LIFE</div>
                <div>
                    <Questionnaire handleValue={this.handleValue}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('index')
);