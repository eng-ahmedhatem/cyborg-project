import React from 'react'

export default function Card(Props) {
  return (
    <div className='Card'>
        <img src={Props.img} alt="" />
        <h2>{Props.title}</h2>
        <p>{Props.text}</p>
    </div>
  )
}
