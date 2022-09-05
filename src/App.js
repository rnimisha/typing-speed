import React, {useState, useEffect} from 'react'
import TypingBox from './Components/TypingBox'

const App = () => {

  const [showResult, setshowResult] = useState(false);
  const [isRestart, setIsRestart] = useState(false);
  const [isTypeAgain, setIsTypeAgain] = useState(false);

  const handleButton = ()=>{
    if(showResult === false)
    {
      setIsRestart(true);
      setIsTypeAgain(false);
    }
    else{
      setIsRestart(false);
      setIsTypeAgain(true);
    }
  }

  useEffect(() => {
    if(isTypeAgain === true)
    {
      setshowResult(false);
      setIsRestart(true)
      setIsTypeAgain(false)
    }
  }, [isTypeAgain])
  
  return (
    <div className='main-container'>
      <div className='box-container'>
         <TypingBox showResult={showResult} setshowResult={setshowResult} isRestart={isRestart}/>
      </div>
      <button onClick={()=>handleButton()}>{showResult ? 'Type Again' : 'Restart'}</button>
    </div>
  )
}

export default App