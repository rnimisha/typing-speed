import React, {useState} from 'react'
import TypingBox from './Components/TypingBox'

const App = () => {

  const [showResult, setshowResult] = useState(false);
  return (
    <div className='main-container'>
      <div className='box-container'>
        {!showResult && <TypingBox setshowResult = {setshowResult}/>}
      </div>
    </div>
  )
}

export default App