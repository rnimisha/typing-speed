import React from 'react'

const LiveResult = ({value, unit}) => {
  return (
    <div className='mini-result-box'>
           {value}
           <div>{unit}</div>
    </div>
  )
}

export default LiveResult