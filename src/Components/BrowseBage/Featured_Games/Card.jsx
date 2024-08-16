import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
export default function Card(Props) {
  return (
    <div className='Card' id={Props.key}>
        <div className="img">
        <img src={Props.img} alt="" />
            <span>{Props.streaming_count} streaming</span>
        </div>
        <div className="text">
            <div className="row-1">
                <h4>{Props.title}</h4>
            <p>{Props.download_text}</p>
                
            </div>
            <div className="row-2">
            <span>
                    <i>
                    <BsFillStarFill />
                    </i>
                    {Props.rating}
                </span>
            <span>
                <i>
                <FaDownload />
                </i>
                {Props.download}
            </span>
            </div>
        </div>
    </div>
  )
}
