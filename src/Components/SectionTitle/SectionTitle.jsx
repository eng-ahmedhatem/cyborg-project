import React from 'react'

export default function SectionTitle(props) {
  return (
    <h1 className='SectionTitle'>
        <span className='text_light'>{props.title_light}</span>
        <span className='text_color'>{props.title_color}</span>
    </h1>
  )

}
