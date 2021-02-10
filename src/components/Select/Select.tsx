import styles from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    setValue: (value: any) => void
    items: Array<ItemType>
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.setValue(value)
        toggleItems()
    }
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.setValue(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.setValue(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
        <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {active &&
        <div className={styles.items}>
            {props.items.map((i, index) => <div
                onMouseEnter={() => {
                    setHoveredElementValue(i.value)
                }}
                className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                onClick={() => {
                    onItemClick(i.value)
                }}
                key={index}>{i.title}</div>)
            }</div>
        }
    </div>
}

