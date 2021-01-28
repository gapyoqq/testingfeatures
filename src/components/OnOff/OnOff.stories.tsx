import {useState} from "react";
import {RatingValueType} from "../../App";
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff ',
    component: OnOff,
}


export const OnMode = () => <OnOff setOn={action('clicked')} on={true}/>
export const OffMode = () => <OnOff setOn={action('clicked')} on={false}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff setOn={setValue} on={value}/>
}
