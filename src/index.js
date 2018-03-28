import React from "react";
import ReactDOM from "react-dom";
import {Row, Input} from 'react-materialize';
import MilestoneContainer from './components/MilestoneContainer';

const Index = () => {
  return (
    <div>
      <div>Helloooo!</div>
      <br />
      <MilestoneContainer />
    </div>
  );
};

ReactDOM.render(
  <Index />,
   document.getElementById("index")
);