import React from 'react'
import LiveResult from './LiveResult'

const TypingBox = () => {


    return (
        <>
            <div className='typing-container'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque sint tempore, facilis asperiores velit. Quasi eligendi officia quod, aliquid qui id unde dolores est itaque esse error optio, exercitationem minus tempore nostrum, mollitia voluptatem! Iusto doloribus enim pariatur illum facere quam. Quibusdam assumenda doloribus facilis tenetur ea neque ut.</p>
                <textarea placeholder='start typing.....'></textarea>
            </div>
            <div className='result-preview'>
                <LiveResult/>
                <LiveResult/>
            </div>
        </>
    )
}

export default TypingBox