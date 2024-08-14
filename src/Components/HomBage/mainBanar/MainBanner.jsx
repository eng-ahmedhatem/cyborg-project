import React from 'react'
import {BtnColor} from "../../components_links"

export default function MainBanner(props) {
  return (
    <>
    <div className='mainBanner'>
      <p>{props.smallTitle}</p>
      <h1><span>{props.textTitle_color} </span>{props.textTitle}</h1>
      {<BtnColor btnTitle="test" width = "150px" height="45px"/>}
    </div>
    </>
  )
}
