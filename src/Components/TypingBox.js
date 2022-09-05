import React, {useEffect, useState} from 'react'
import LiveResult from './LiveResult'

const sentence = 'hello this is just for text'
const sentenceArr = sentence.split('')
const TypingBox = () => {

    const [input, setInput] = useState("")

    const arr = input.split('')
    return (
        <>
            <div className='typing-container'>
                <p>
                    {
                        sentenceArr.map((item, id)=>{

                            if(arr.length>id)
                            {
                              debugger;
                                return(
                                    <span key = {id} style={{color : arr[id] === sentenceArr[id] ? '#00ff00' : '#ff0000'}}>
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

                <textarea placeholder='start typing.....' onKeyUp = {(e)=>{setInput(e.target.value)}}></textarea>
            </div>


            <div className='result-preview'>
                <LiveResult/>
                <LiveResult/>
            </div>
        </>
    )
}

export default TypingBox