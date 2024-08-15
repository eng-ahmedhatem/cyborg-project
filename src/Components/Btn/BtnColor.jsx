import React from 'react'
import { BiBorderRadius, BiFontSize } from 'react-icons/bi'

const BtnColor = (Props) => {
    const btnStyle = {
        width:Props.width,
        height:Props.height
    
        
    }
  return (
    <button style={btnStyle} className={`btn_compo ${Props.btnType}`}>
        {Props.btnTitle}
    </button>
  )
}
export default BtnColor
