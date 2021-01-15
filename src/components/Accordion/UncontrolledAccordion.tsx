import React, {useState} from "react";

type PropsType = {
    title: string
}

export function UncontrolledAccordion(props: PropsType) {
    const [collapsed, setCollapsed] = useState(false)
    const setCollapsedCB = () => setCollapsed(!collapsed)
    return <div>
        <AccordionTitle setCollapsedCB={setCollapsedCB} title={props.title}/>
        {!collapsed && <AccordionBody/>}

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
        <li>2</li>0
        <li>3</li>
    </ul>
}
