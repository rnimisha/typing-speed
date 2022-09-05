import React from 'react'
import LiveResult from './LiveResult'

const TypingBox = () => {
  return (
    <div className='box-container'>
        <div className='typing-container'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis ea, doloremque, ut accusantium blanditiis, porro pariatur id soluta harum cupiditate quasi! Dicta, nulla dolores reiciendis id delectus ab! Sunt soluta molestias animi fuga dicta minus, quia aperiam quis, porro vero molestiae quidem, suscipit voluptatibus cupiditate. Beatae hic neque excepturi, praesentium similique obcaecati repudiandae fugit quisquam temporibus, dolor dignissimos quae earum ab veritatis fuga maiores pariatur repellendus nemo? Iusto sequi fugiat adipisci recusandae. Doloribus porro est illum sapiente, blanditiis harum ullam corporis quidem repudiandae, eos laboriosam officiis nesciunt excepturi nam quaerat eveniet accusamus similique qui nostrum illo cum accusantium? Iusto?
        </div>
        <div className='result-preview'>
            <LiveResult/>
            <LiveResult/>
        </div>
    </div>
  )
}

export default TypingBox