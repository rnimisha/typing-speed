import React from 'react'

const FinalResult = ({data, label}) => {
  return (
    <div>
        <div className='circle'>
            {data}

        </div>
        <div className='label'>
            {label}
        </div>

    </div>
  )
}

export default FinalResult