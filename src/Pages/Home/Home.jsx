import React from 'react'
import "./home.css"
import {MainBanner, MostPopular,Your_Gaming} from "../../Components/components_links"
export default function Home() {
  return (
    <>
    <MainBanner smallTitle="Welcome To Cyborg" textTitle_color="Browse" textTitle="Our Popular Games Here"/>
    <MostPopular/>
    <Your_Gaming/>

    </>
  )
}
