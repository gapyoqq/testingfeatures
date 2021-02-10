import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * The name of accordion
     */
    title: string
    setAccordionCollapsed: () => void
    accordionCollapsed: boolean
    color?: string
    items: Array<string>
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle setAccordionCollapsed={props.setAccordionCollapsed} title={props.title}
                        color={props.color}/>
        {!props.accordionCollapsed && <AccordionBody items={props.items}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        style={{color: props.color ? props.color : 'black'}}
        onClick={(e) => props.setAccordionCollapsed()}>
        {props.title}
    </h3>
}

function AccordionBody(props: { items: Array<string>}) {
    return <ul>
        {props.items.map((i, index) => <li key={index}>{i}</li>)}
    </ul>
}
