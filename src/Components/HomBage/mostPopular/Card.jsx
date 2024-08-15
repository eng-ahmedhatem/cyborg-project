import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

export default function Card(Props) {
  return (
    <div className='Card' id={Props.key}>
        <div className="text">
            <div className="row-1">
                <h4>{Props.title}</h4>
                <span>
                    <i>
                    <BsFillStarFill />
                    </i>
                    {Props.rating}
                </span>
            </div>
            <div className="row-2">
            <p>{Props.category}</p>
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
