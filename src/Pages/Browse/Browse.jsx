import React from 'react'
import "./Browse.css"
import {Featured_Games , TopDownloaded} from "../../Components/components_links"
export default function Browse() {
  return (
    <section>
            <div className="panner">
                <Featured_Games/>
                <TopDownloaded/>

            </div>
    </section>
  )
}
