import React, {useEffect, useState} from 'react'
import LiveResult from './LiveResult'

const sentence = 'hello this is just for text'
const sentenceArr = sentence.split('')

const TypingBox = () => {
    const [input, setInput] = useState("")
    const [isStarted, setIsStarted] = useState(false)
    const [seconds, setSeconds] = useState(0);

    const arr = input.split('')
  
    useEffect(()=>{
        if(isStarted === true)
        {
            setInterval(()=>{
                setSeconds(prev=>prev + 1)
            }, 1000)
        }
    }, [isStarted])


    const userInputHandle =(val)=>{
        setIsStarted(true)
        setInput(val)
    }


    return (
        <>
            <div className='typing-container'>
                <p>
                    {seconds}
                    {
                        sentenceArr.map((item, id)=>{

                            if(arr.length>id)
                            {
                                return(
                                    <span key = {id} style={{backgroundColor : arr[id] === sentenceArr[id] ? '#c7d6cc' : '#e0c8c8', color: '#000'}}>
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

                <textarea placeholder='start typing.....' onChange={(e)=>{userInputHandle(e.target.value)}}>

                </textarea>
            </div>


            <div className='result-preview'>
                <LiveResult/>
                <LiveResult/>
            </div>
        </>
    )
}

export default TypingBox