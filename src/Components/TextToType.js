import React from 'react'

const TextToType = ({sentenceinputArr, inputArr}) => {
  return (
    <p>
        {
            sentenceinputArr.map((item, id)=>{

                if(inputArr.length>id)
                {
                    return(
                        <span key = {id} style={{backgroundColor : inputArr[id] === sentenceinputArr[id] ? '#c7d6cc' : '#e0c8c8', color: '#000'}}>
                            {item}
                        </span>
                    )
                }

                else{
                    return(
                        <span key = {id} >
                            {item}
                        </span>
                    )
                }
            })
        }
    </p>
  )
}

export default TextToType