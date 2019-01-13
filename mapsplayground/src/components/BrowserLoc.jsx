import React from 'react'

const BrowserLoc = () => {
  return (
    <div>
      
    </div>
  )
}

export default BrowserLoc;

BrowserLoc.defaultProps = {
    zoom:14,
    initialCenter:{
        lat:-1.2884,
        lng:36.8233
        
    },
    centerAroundCurrentLocation:false,
    visible:true
}
