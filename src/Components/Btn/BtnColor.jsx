import React from 'react'
import { BiBorderRadius, BiFontSize } from 'react-icons/bi'

const BtnColor = (props) => {
    const btnStyle = {
        width:props.width,
        height:props.height
    
        
    }
  return (
    <button style={btnStyle} className='btn_compo btn_color'>
        {props.btnTitle}
    </button>
  )
}
export default BtnColor
