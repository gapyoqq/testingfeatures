import React, {useState} from "react";

type PropsType = {
    title: string
}

export function UncontrolledAccordion(props: PropsType) {
    const [collapsed, setCollapsed] = useState(false)
    const onClickCollapsed = () => setCollapsed(!collapsed)
    return <div>
        <AccordionTitle onClickCollapsed={onClickCollapsed} title={props.title}/>
        {!collapsed && <AccordionBody/>}
    </div>
}


function AccordionTitle(props: { title: string, onClickCollapsed: () => void }) {
    return <h3 onClick={() => {props.onClickCollapsed()}}>
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
