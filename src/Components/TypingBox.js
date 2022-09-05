import React, {useEffect, useState} from 'react'
import LiveResult from './LiveResult'

const sentence = 'hello'
// const sentence = "To learn to type quickly, practice often and adopt the proper technique. Fix your posture, have adequate lighting, position your hands correctly over the keyboard, look at the screen and use all your fingers to hit the keys. At first, concentrate on accuracy over speed. This will help you develop muscle memory and create automatic reflexes. Keep practicing and gradually pick up the pace. You'll see results after just a few weeks!"
const sentenceinputArr = sentence.split('')

const TypingBox = ({setshowResult}) => {
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
        if(inputArr.length+1 >= sentenceinputArr.length)
        {
            setIsStarted(false);
            setshowResult(true);
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

                <textarea placeholder='start typing.....' onKeyUp={(e)=>{userInputHandle(e.target.value)}}>

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