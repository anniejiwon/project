import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';
import QuestionnaireItem from './QuestionnaireItem';

export default class Questionnaire extends Component {
    render() {
        const { handleValue } = this.props;
        return (
            <QuestionnaireItem handleValue={handleValue} />
        );
    }
}
