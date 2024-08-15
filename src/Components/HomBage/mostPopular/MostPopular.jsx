import React from 'react'
import {SectionTitle , Card ,BtnColor} from "../../components_links"

export default function MostPopular() {
    const cardData = [
    {key: 1 , img:"../../../../public/home/mostPopular/popular-01.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 2 , img:"../../../../public/home/mostPopular/popular-02.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 3 , img:"../../../../public/home/mostPopular/popular-03.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 4 , img:"../../../../public/home/mostPopular/popular-04.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 5 , img:"../../../../public/home/mostPopular/popular-05.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 6 , img:"../../../../public/home/mostPopular/popular-06.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 7 , img:"../../../../public/home/mostPopular/popular-07.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},
    {key: 8 , img:"../../../../public/home/mostPopular/popular-08.jpg", title : "Fortnite", rating : "4.8", category:"Legendary", download : "2.4m"},

    ]
    const data = cardData.map(card => <Card {...card} /> )
  return (
    <section className='MostPopular'>
        <SectionTitle title_light="Most Popular" title_color="Right Now"/>
        <div className="cards">
            {data}
        </div>
        <BtnColor btnTitle="Discover Popular" btnType="btn_color" height="45px" width="180px"/>
    </section>
  )
}
