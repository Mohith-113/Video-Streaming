import React from 'react'
import v1 from './Episodes/bpage2.mp4'

function Episode() {
  return (
    <div>
        <video><source src={v1} type={'video/mp4'}/></video>
      
    </div>
  )
}

export default Episode