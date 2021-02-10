import React, {useReducer} from "react";
import {reducer} from "./reducer";

type PropsType = {
    title: string
}



export function UncontrolledAccordion(props: PropsType) {
    //const [collapsed, setCollapsed] = useState(false)

    const [state, dispatch] = useReducer(reducer,{collapsed:false})

    return <div>
        <AccordionTitle setCollapsedCB={()=> {
        dispatch({type:"TOGGLE-COLLAPSED"})}
        } title={props.title}/>
        {!state.collapsed && <AccordionBody/>}

    </div>
}


function AccordionTitle(props: { title: string, setCollapsedCB: () => void }) {
    return <h3 onClick={() => {
        props.setCollapsedCB()
    }}>
        {props.title}
    </h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

