import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3BEiIvcTSgqk6d4wJH-HfRZJ6aAs5WAdxU71F3AbWLDHdJlOTW5H7Y81lqvrAijY-BQ&usqp=CAU" alt="" />
        <span>Vishnu</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
