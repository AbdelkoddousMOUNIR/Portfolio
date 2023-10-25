import React, { useState } from 'react'
import '../styles/Skills.css'
import { SiCss3, SiHtml5, SiJavascript , SiMongodb , SiRedux } from "react-icons/si";
import { FaNodeJs , FaReact , FaSass } from "react-icons/fa";

export default function Skills() {
    let [addAnimation, setAddAnimation] = useState(false)
  return (
    <div className='Skills'>
          <div className={`skillsContainer`} onClick={() => setAddAnimation(!addAnimation)}>
            <h1>my skills</h1>
              <div className={`frontend ${addAnimation ? "frontendAnimation": ""}`}>
                <h1>front end</h1>
                <div className={`cercle ${addAnimation ? "html": ""}`} ><SiHtml5 className='icon'/></div>
                <div className={`cercle ${addAnimation ? "css": ""}`}>
                  <SiCss3 className='icon'/>  
                  <div className={`cercle2 ${addAnimation ? "sass" : ""}`}>
                    <FaSass className='icon'/>
                  </div>  
                </div>
                <div className={`cercle ${addAnimation ? "js": ""}`}>
                  <SiJavascript className='icon'/>
                  <div className={`cercle2 ${addAnimation ? "react": ""}`}>
                    <FaReact className='icon' />
                  </div> 
                    <div className={`cercle2 ${addAnimation ? "redux": ""}`}>
                      <SiRedux className='icon' />
                    </div> 
                </div>  
            </div> 
              <div className={`backend ${addAnimation ? "backendAnimation": ""}`}>
                <h1>back end</h1>
                <div className={`cercle ${addAnimation ? "nodejs": ""}`}>
                  <FaNodeJs className='icon'/>
                  <div className={`cercle2 ${addAnimation ? "express": ""}`}>
                    <span>ex</span>
                  </div>  
                </div>
                <div className={`cercle ${addAnimation ? "mongoDb": ""}`}>
                  <SiMongodb className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
