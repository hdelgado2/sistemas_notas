import React from 'react'
import '../css/app.css'
import { Icon } from '@iconify-icon/react';


export default  () => {
    return (
      <>
        <div className="cargando">
        <Icon 
            className='image' 
            icon="svg-spinners:bars-scale-fade" 
            width={48} 
            height={48} style={{color: '#071a78'}}/>
        </div>
      </>
    )
  }


