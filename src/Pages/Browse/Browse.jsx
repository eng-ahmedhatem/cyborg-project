import React from 'react'
import "./Browse.css"
import {Featured_Games , TopDownloaded , StartStream , MostPopular_Live} from "../../Components/components_links"
export default function Browse() {
  return (
    <section>
            <section className="panner">
                <Featured_Games/>
                <TopDownloaded/>
            </section>
                <StartStream/>
                <MostPopular_Live/>
    </section>
  )
}
