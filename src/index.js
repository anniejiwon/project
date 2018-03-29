import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Input} from 'react-materialize';
import MainContainer from './components/MainContainer';

const Index = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{display: 'inline-block', height: '50px', fontSize: '50px', marginBottom: '50px'}}>PROJECT: LIFE</div>
            <MainContainer />
            <div style={{display: 'inline-block', height: '50px', fontSize: '50px', marginTop: '50px'}}>ANALYSIS</div>
            <div style={{display: 'flex', width: '100%', height: '500px', background: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{background: 'white'}}>THIS SOMETHING HERE</span>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Index />,
    document.getElementById('index')
);