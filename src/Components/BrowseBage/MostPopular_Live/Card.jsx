import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function Card(Props) {
  return (
    <div className='Card'>
        <img src={Props.img_card} alt="" />
        <div className="row-2">
            <img src={Props.img_user} alt="" />
            <div className="text">
                <span><i><FaCheckCircle/></i> {Props.user_name}</span>
                <h4>{Props.title}</h4>
            </div>
        </div>
    </div>
  )
}
