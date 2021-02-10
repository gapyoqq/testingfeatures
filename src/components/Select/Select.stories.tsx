import {Select, SelectPropsType} from "./Select";
import {useState} from "react";


export default {
    title: 'Select ',
    component: Select
}


export const OwnSelect = () => {
    const [value, setValue] = useState('1')

    return <>
        <Select value={value} setValue={setValue} items={
            [
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Kiev'},
                {value: '3', title: 'Moscow'}
            ]
        }/>
    </>
}
