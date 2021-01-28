import React from "react";

export type AccordionPropsType = {
    /**
     * The name of accordion
     */
    title: string
    setAccordionCollapsed:()=>void
    accordionCollapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed} title={props.title}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>
}


function AccordionTitle(props: { title: string,setAccordionCollapsed:()=>void }) {
    return <h3 onClick={(e)=>props.setAccordionCollapsed()}>
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
