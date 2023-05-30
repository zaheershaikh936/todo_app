import React from 'react'
import { Outlet } from 'react-router-dom'
// !other import
import './App.css'
import Navbar from './component/navbar/Navbar'
import TopMenu from './component/navbar/TopMenu'


function App() {
  return (
    <>      
      <main className="bg-gray-200">
          <div className="min-h-screen flex">
            <Navbar />
              <div className="flex-1 min-w-0 overflow-auto p-5 ">
                <div className='bg-white h-full rounded-xl p-1'>
                  <TopMenu />
                  <hr />
                  <Outlet />
                </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
