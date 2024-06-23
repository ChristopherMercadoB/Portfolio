import React, { useState } from 'react'
import proyectos from '../../data/data'

const Project = () => {

    const [frontend, setFrontend] = useState(false)

    const handleClick = () =>{
        setFrontend(!frontend)
    }

    const proyectFront = proyectos.filter(e=> e.area === 'frontend')
    const proyectBack = proyectos.filter(e=> e.area === 'backend')
    
  return (
    <>
    <div className="project">
        <h1>Proyectos</h1>
        <button onClick={handleClick}>{frontend ? 'Backend': 'Frontend'}</button>
        <div className="project-list">
            <div className='individual'>
                <img src="" alt="" />
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Project