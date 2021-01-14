import React from 'react';
import './App.css';

import OnOff from "./components/Accordion/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";

function App() {
    return (
        <div className="App">
            <OnOff />
            <UncontrolledAccordion title={'menu'}/>


        </div>
    );
}

export default App;


