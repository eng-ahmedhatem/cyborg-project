import React from 'react'
import BtnColor from "../../Btn/BtnColor"
export default function Row(Props) {
  return (
    <div className='row'>
        <img src={Props.img} alt="" />
        <div className="text">
            <div>
                <h4>{Props.name}</h4>
                <span>{Props.type}</span>
            </div>
            <div>
                <h4>Date Added</h4>
                <span>{Props.date}</span>
            </div>
            <div>
                <h4>Hours Played</h4>
                <span>{Props.hours}</span>
            </div>
            <div>
                <h4>Currently</h4>
                <span>{Props.status}</span>
            </div>
        </div>
        <BtnColor btnTitle = {Props.btnTitle} btnType={Props.status.toLocaleLowerCase() == "Downloaded".toLocaleLowerCase() ? "btn_transparent_done" : "btn_transparent"} height="45px" width="150px"/>
        <button></button>
    </div>
  )
}
