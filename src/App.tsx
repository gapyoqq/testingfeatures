import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/Accordion/OnOff/OnOff";
import {Rating} from "./components/Accordion/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <OnOff/>
            <Rating
                setRatingValue={setRatingValue}
                value={ratingValue}/>
            <Accordion accordionCollapsed={accordionCollapsed} title={'Menu'}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>

        </div>
    );
}

export default App;



