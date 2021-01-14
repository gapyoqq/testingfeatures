import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: PropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}


function AccordionTitle(props: { title: string }) {
    return <h3>
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
