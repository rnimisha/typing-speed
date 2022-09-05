import React, {useEffect, useState} from 'react'
import FinalResult from './FinalResult'
import LiveResult from './LiveResult'
import TextToType from './TextToType'

// const sentence = 'hello this is for testing'
const sentence = "To learn to type quickly, practice often and adopt the proper technique. Fix your posture, have adequate lighting, position your hands correctly over the keyboard, look at the screen and use all your fingers to hit the keys. At first, concentrate on accuracy over speed. This will help you develop muscle memory and create automatic reflexes. Keep practicing and gradually pick up the pace. You'll see results after just a few weeks!"
const sentenceinputArr = sentence.split('')

const TypingBox = ({showResult, setshowResult, isRestart}) => {
    const [input, setInput] = useState("")
    const [isStarted, setIsStarted] = useState(false)
    const [seconds, setSeconds] = useState(0);
    const [inCorrect, setIncorret] = useState(0);


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

    useEffect(()=>{

        if(isRestart === true)
        {
            setInput('')
            setIsStarted(false)
            setSeconds(0)
            document.getElementById("text-input").reset();
        }
    }, [isRestart])


    const userInputHandle =(val)=>{
        if(inputArr.length+1 >= sentenceinputArr.length)
        {
            const inCorrectWords = inputArr.filter((item,id)=>{
                return inputArr[id] !== sentenceinputArr[id];
            })

            setIncorret(inCorrectWords.length)
            setIsStarted(false);
            setshowResult(true);
            return;
        }
        setIsStarted(true)
        setInput(val)
    }


    return (
        <>
            {!showResult && <>
                <div className='typing-container'>
                    <TextToType sentenceinputArr={sentenceinputArr} inputArr={inputArr}/>
                    <form id='text-input'>
                    <textarea placeholder='start typing here.....' onKeyUp={(e)=>{userInputHandle(e.target.value)}}>
                        </textarea>
                    </form>
                </div>

                <div className='result-preview'>
                    <LiveResult value = {seconds} unit = 'sec'/>
                    <LiveResult value = {isFinite(wpm) && !isNaN(wpm) ? wpm : 0.00} unit = 'wpm'/>
                </div>
            </>}

            {
                showResult && <div className = 'final-result-container'>
                    <FinalResult data = {`${(((sentenceinputArr.length) - inCorrect)/sentenceinputArr.length) * 100}%`} label = 'Accuracy'/>
                    <FinalResult data = {isFinite(wpm) && !isNaN(wpm) ? wpm : 0.00} label = 'WPM'/>
                    <FinalResult data = {inCorrect} label='Mistakes'/>
                </div>
            }
            
        </>
    )
}

export default TypingBox