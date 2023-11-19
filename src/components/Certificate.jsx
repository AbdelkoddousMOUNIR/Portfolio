import React from 'react'
import { certificatesdata } from './certificatesdata'
import '../styles/Certificate.css'
import { Link } from 'react-router-dom'

export default function Certificate() {
  return (
    <div className='Certificate'>
      <h1>Certificates</h1>
      <div className="container">
        {certificatesdata.map((item , index) => (<Link to={item.certificateUrl} key={index}><img src={item.certifitateImg} alt = ""/></Link>))}
      </div>
    </div>
  )
}
