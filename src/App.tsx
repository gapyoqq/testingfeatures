import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)

    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>
            <Rating
                setRatingValue={setRatingValue}
                value={ratingValue}/>
            <Accordion accordionCollapsed={accordionCollapsed} title={'Menu'}
                       setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>

        </div>
    );
}

export default App;



