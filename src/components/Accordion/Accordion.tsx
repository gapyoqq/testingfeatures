import React from "react";

type PropsType = {
    title: string
    setAccordionCollapsed:()=>void
    accordionCollapsed: boolean
}

export function Accordion(props: PropsType) {
    return <div>
        <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed} title={props.title}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}


function AccordionTitle(props: { title: string,setAccordionCollapsed:()=>void }) {
    return <h3 onClick={()=>props.setAccordionCollapsed()}>
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
