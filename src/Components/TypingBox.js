import React, {useEffect, useState} from 'react'
import LiveResult from './LiveResult'

const sentence = 'hello this is just for text'
const sentenceinputArr = sentence.split('')

const TypingBox = () => {
    const [input, setInput] = useState("")
    const [isStarted, setIsStarted] = useState(false)
    const [seconds, setSeconds] = useState(0);

    const inputArr = input.split('')

    const words = inputArr.length/5;
    const mins = seconds/60;
    const wpm =(words/mins).toFixed(2);
  
    useEffect(()=>{
        let timer;
        if(isStarted === true)
        {
            timer = setInterval(()=>{
                setSeconds(prev=>prev + 1)
            }, 1000)
        }
        return () =>{
            clearInterval(timer)
        }
    }, [isStarted])


    const userInputHandle =(val)=>{

        console.log(inputArr.length, sentenceinputArr.length-1)
        if(inputArr.length >= sentenceinputArr.length-1)
        {
            setIsStarted(false);
            return;
        }
        setIsStarted(true)
        setInput(val)
    }


    return (
        <>
            <div className='typing-container'>
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

                <textarea placeholder='start typing.....' onChange={(e)=>{userInputHandle(e.target.value)}}>

                </textarea>
            </div>


            <div className='result-preview'>
                <LiveResult value = {seconds} unit = 'sec'/>
                <LiveResult value = {isFinite(wpm) && !isNaN(wpm) ? wpm : 0.00} unit = 'wpm'/>
            </div>
        </>
    )
}

export default TypingBox