import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Accordion/Rating/Rating";

function App() {
    return (
        <div className="App">
            <Accordion collapsed ={true} title = {'menu'}/>
            <Rating value = {1}/>
            <Accordion collapsed ={false} title = {'users'}/>
            <Rating value = {1}/>
        </div>
    );
}

export default App;


