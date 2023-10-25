import React from 'react'
import '../styles/ProjectCard.css'

export default function ProjectCard({img , ProjectName , ProjectInfos}) {
  return (
    <div className='ProjectCard'>
        <img src={img} alt="" />
        <div className="info">
          <h1>{ ProjectName }</h1>
          <p>{ ProjectInfos }</p>
        </div>
    </div>
  )
}
