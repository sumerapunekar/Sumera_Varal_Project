import React from 'react'


function SmallCard({title, text,icon}) {
  return (
    <div className='main1'>
                    <img className='main_img' src={icon}/>
                    <h3 className='main_head '>{title}</h3>
                    <p className='main_mini'>{text}</p>
                    <h3 className='main_line'>Get Started</h3>
                </div>
  )
}

export default SmallCard