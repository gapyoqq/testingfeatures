import React from "react";


type PropsType = {
    selected: boolean
    setRatingValue: ()  => void
}

export function Star(props:PropsType) {
    return <span onClick={()=>props.setRatingValue()}>
        {props.selected? <b>star</b> : "star" }
    </span>
}

