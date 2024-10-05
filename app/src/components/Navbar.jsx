import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-2xl mx-8'><span className='text-blue-200'>i</span>Task</span>
        </div>
      <ul className="flex justify-center items-center gap-8 mx-9 ">
        <li className='cursor-pointer hover:font-bold transition-all text-xl'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>
        <button onClick={() => window.open('https://github.com/Hassanrajput189/iTask-Todo-List-App.git')} className='text-white bg-purple-950 rounded-full flex justify-between items-center ring-white ring-1  hover:text-xl hover:bg-purple-900'>
                    <img className='invert w-10 p-1' src="/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar