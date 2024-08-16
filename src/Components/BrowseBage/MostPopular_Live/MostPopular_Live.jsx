import React from 'react'
import Card from "./Card"
import {SectionTitle ,BtnColor} from "../../components_links"
export default function MostPopular_Live() {
  return (
    <section className='MostPopular_Live'>
        <SectionTitle title_light="Most Popular" title_color="Live Stream"/>
        <div className="cards">
        <Card img_card="../../../../public/Browse/MostPopular_Live/stream-01.jpg" img_user="../../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name="KenganC" title="Just Talking With Fans"/>
        <Card img_card="../../../../public/Browse/MostPopular_Live/stream-02.jpg" img_user="../../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name="LunaMa" title="CS-GO 36 Hours Live Stream"/>
        <Card img_card="../../../../public/Browse/MostPopular_Live/stream-03.jpg" img_user="../../../../public/Browse/MostPopular_Live/avatar/avatar-02.jpg" user_name="Areluwa" title="Maybe Nathej Allnight Chillin'"/>
        <Card img_card="../../../../public/Browse/MostPopular_Live/stream-04.jpg" img_user="../../../../public/Browse/MostPopular_Live/avatar/avatar-03.jpg" user_name="GangTm" title="Live Streaming Till Morning"/>
        </div>
        <BtnColor btnTitle="discover all streams" width="210px" height="45px" btnType ="btn_color"/>
    </section>
  )
}
