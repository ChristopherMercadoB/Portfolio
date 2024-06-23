import React, { useState } from 'react'

const Project = () => {

    const [frontend, setFrontend] = useState(false)

    const handleClick = () =>{
        setFrontend(!frontend)
    }

   const Tecno = (tUsed, name) => {
        return (
            <>
                <p className={tUsed}>{name}</p>
            </>
        )
   }
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