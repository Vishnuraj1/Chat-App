import React from 'react'
import cam from "../img/Camera btn .png"
import more from "../img/More btn.png"
import Messages from './Messages'
import Input from "./Input"

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
          <Messages/>
          <Input/>
    </div>
  )
}

export default Chat
