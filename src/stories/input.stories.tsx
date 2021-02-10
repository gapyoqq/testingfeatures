import {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input '
}


export const UnControlledInput = () => <input/>


export const GetValueOfUncInp = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return <><input ref={inputRef}/>
        <button onClick={() => {
            const el = inputRef.current as HTMLInputElement
            setValue(el.value)
        }}>save
        </button>
        - actual value: {value}</>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')


    return <input value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }
    }/>
}


export const ControlledСheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    return <input type='checkbox' checked={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.checked)
    }}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    return <select value={parentValue} onChange={(e) => {
        setParentValue(e.currentTarget.value)
    }}>
        <option value={'1'}>None</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

