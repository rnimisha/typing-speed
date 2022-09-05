import React, {useEffect, useState} from 'react'
import LiveResult from './LiveResult'

const sentence = 'hello this is just for text'
const sentenceArr = sentence.split('')
const TypingBox = () => {

    const [input, setInput] = useState("")


    return (
        <>
            <div className='typing-container'>
                <p>
                    {
                        sentenceArr.map((item, id)=>{
                           return(
                            <span key = {id}>
                                {item}
                            </span>
                           )
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