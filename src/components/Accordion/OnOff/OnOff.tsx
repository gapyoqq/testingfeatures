import React, {useState} from "react";

type PropsType = {}


function OnOff(props: PropsType) {

    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : ''
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return <div>
        <div onClick={() => {
            setOn(true)
        }} style={onStyle}>On
        </div>
        <div onClick={() => {
            setOn(false)
        }} style={offStyle}>Off
        </div>
        <div onClick={() => {
            setOn(!on)
        }} style={indicatorStyle}>-</div>
    </div>
}


export default OnOff
