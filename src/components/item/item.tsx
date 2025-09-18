
import { useState } from "react";

export interface carsItemProps
{
    title:string,
    img:string

}

export function Item(props:carsItemProps)
{
    return <div className="carItem">
        <h1>{props.title}</h1>
        <img src={props.img} alt="hi" />
    </div>
}

