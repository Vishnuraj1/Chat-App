import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3BEiIvcTSgqk6d4wJH-HfRZJ6aAs5WAdxU71F3AbWLDHdJlOTW5H7Y81lqvrAijY-BQ&usqp=CAU" alt="" />
      <span>just now</span>
      </div>
      <div className="messageContent">
          <p>Hello </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3BEiIvcTSgqk6d4wJH-HfRZJ6aAs5WAdxU71F3AbWLDHdJlOTW5H7Y81lqvrAijY-BQ&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Message
