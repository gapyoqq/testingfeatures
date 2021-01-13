import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Accordion/Rating/Rating";

function App() {
    return (
        <div className="App">
            <Accordion/>
            <Rating value = {4}/>
        </div>
    );
}

export default App;


