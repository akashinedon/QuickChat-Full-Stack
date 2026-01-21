import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
// Keep these imports as ../../ because your context folder is outside src
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext)
  const { authUser } = useContext(AuthContext)

  return (
    // 1. OUTER CONTAINER: Centers the app window on the screen
    <div className='flex items-center justify-center min-h-screen px-4'>
      
      {/* 2. APP WINDOW: The "Glass" card with fixed height and width */}
      <div className='bg-[#1c1d25] bg-opacity-80 backdrop-blur-lg w-full max-w-6xl h-[85vh] rounded-xl shadow-2xl overflow-hidden flex border border-gray-700 text-white'>
        
        {/* 3. SIDEBAR: User list */}
        <Sidebar />

        {/* 4. CHAT AREA: Expands to fill space */}
        <div className={`flex-1 flex flex-col ${!selectedUser ? "hidden md:flex" : "flex"}`}>
           <ChatContainer />
        </div>

        {/* 5. RIGHT SIDEBAR: Profile info (Hidden on small screens) */}
        <div className={`hidden lg:block w-1/4 border-l border-gray-700`}>
           <RightSidebar />
        </div>

      </div>
    </div>
  )
}

export default HomePage