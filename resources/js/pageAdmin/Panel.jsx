import React from 'react'
import Sidebar from './Sidebar'

const Panel = () => {
  return (
    <>
      <div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <Sidebar></Sidebar>
        <div className="col-sm-9">
          <h1 className="text-center">Panel de Control</h1>
        </div>

      </div>
      </div>
    </>
  )
}

export default Panel