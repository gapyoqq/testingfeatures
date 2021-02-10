import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Accordion ',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            items: [],
            ...GetCategoryObj('Color')
        },
        accordionCollapsed: {
            ...GetCategoryObj('Events')
        },
        setAccordionCollapsed: {
            ...GetCategoryObj('Events')
        }
    }
}

const callback = action('accordion mode changed')

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args} />

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    items: ['1', '2', '3'],
    title: 'Menu',
    accordionCollapsed: true,
    setAccordionCollapsed: callback
}
export const MenuUnCollapsedMode = Template.bind({})

MenuUnCollapsedMode.args = {
    items: [],
    title: 'Users',
    accordionCollapsed: false,
    setAccordionCollapsed: callback
}


export const ModeChanging = () => {
    const [collapsed, setAccordionCollapsed] = useState<boolean>(true)
    return <Accordion
        items={['Pasha', 'Lesha', 'Sasha']}
        setAccordionCollapsed={() => setAccordionCollapsed(!collapsed)} accordionCollapsed={collapsed}
        title={'Menu'}/>
}

