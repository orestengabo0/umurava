import React from 'react'
import DashRightProps from '../../../types/Dashboard/Dashboard'
import Navbar from '../Navbar/Navbar'

const DashRight: React.FC<DashRightProps> = ({children}) => {
  return (
    <div className=' bg-[#F9FAFB] h-full md:h-[100vh] w-full md:w-[80%] flex flex-col '>
        <Navbar />
        <div className=' flex flex-col h-[90%] overflow-y-auto'>
            {children}
        </div>
    </div>
  )
}

export default DashRight