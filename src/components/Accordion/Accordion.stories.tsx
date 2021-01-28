import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion ',
    component: Accordion,
}

const callback = action('accordion mode changed')

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    title:'Menu',
    accordionCollapsed: true,
    setAccordionCollapsed: callback
}
export const MenuUnCollapsedMode = Template.bind({})

MenuUnCollapsedMode.args = {
    title:'Users',
    accordionCollapsed: false,
    setAccordionCollapsed: callback
}





export const ModeChanging = () => {
    const [collapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion setAccordionCollapsed={() => setAccordionCollapsed(!collapsed)} accordionCollapsed={collapsed}
                      title={'Menu'}/>
}
