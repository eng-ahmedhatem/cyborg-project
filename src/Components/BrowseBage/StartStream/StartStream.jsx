import React from 'react'
import {SectionTitle,BtnColor} from "../../components_links"
import Card from "./Card"
export default function StartStream() {
  return (
    <section className='StartStream'>
        <SectionTitle title_light="How To Start Your" title_color="Live Stream"/>
        <div className="cards">
        <Card img="../../../../public/Browse/startStream/service-01.jpg" 
        title="Go To Your Profile" 
        text ="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout."
        />
        <Card img="../../../../public/Browse/startStream/service-01.jpg" 
        title="Go To Your Profile" 
        text ="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout."
        />
        <Card img="../../../../public/Browse/startStream/service-01.jpg" 
        title="Go To Your Profile" 
        text ="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout."
        />
        </div>
    <BtnColor btnTitle="go to profile" width="150px" height="50px" btnType="btn_color"/>
    </section>
  )
}
