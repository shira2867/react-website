import { useState } from "react";
import { Item } from "../item/item";
import mazdaImg from '../../pic/הורדה.jpg'; 
import hondaImg from '../../pic/honda-crv-new.jpg'
import toyotaImg from  '../../pic/images.jpg'
export function Main()
{
      let carsData = [
    {id:1, title: "Mazda ", img:mazdaImg },
    {id:2, title: "Toyota ", img: toyotaImg },
    {id:2, title: "Honda ", img:hondaImg   },
  ];   

    return (
         <main className="main">
      {carsData.map((car, i) => (
        <Item key={i} title={car.title} img={car.img} />
      ))}
    </main>
    )
}