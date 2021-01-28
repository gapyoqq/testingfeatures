import React from "react";

type PropsType = {
    setOn: (on:boolean) => void
    on: boolean
}


function OnOff(props: PropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : ''
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return <div>
        <div onClick={() => {
            props.setOn(true)
        }} style={onStyle}>On
        </div>
        <div onClick={() => {
            props.setOn(false)
        }} style={offStyle}>Off
        </div>
        <div onClick={() => {
            props.setOn(!props.on)
        }} style={indicatorStyle}>-</div>
    </div>
}


export default OnOff
