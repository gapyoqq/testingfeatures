import React from "react";
import {Star} from "./Star/Star";
import {RatingValueType} from "../../App";


type PropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: PropsType) {
    return <div>
        <Star setRatingValue={()=>props.setRatingValue(1)} selected={props.value > 0}/>
        <Star setRatingValue={()=>props.setRatingValue(2)} selected={props.value > 1}/>
        <Star setRatingValue={()=>props.setRatingValue(3)} selected={props.value > 2}/>
        <Star setRatingValue={()=>props.setRatingValue(4)} selected={props.value > 3}/>
        <Star setRatingValue={()=>props.setRatingValue(5)} selected={props.value > 4}/>
    </div>
}

