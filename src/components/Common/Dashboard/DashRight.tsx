import React from 'react'
import DashRightProps from '../../../types/Dashboard/Dashboard'
import Navbar from '../Navbar/Navbar'

const DashRight: React.FC<DashRightProps> = ({children}) => {
  return (
    <div className=' bg-[#F9FAFB] h-full md:h-[100vh] w-full md:w-[82%] flex flex-col '>
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default DashRight