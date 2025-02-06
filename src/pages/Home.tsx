import React from 'react'
import Dashboard from '../layout/Dashboard'
import TextCard from '../components/Home/TextCard/TextCard'
import ViewProfile from '../components/Home/ViewProfile/ViewProfile'
import StatsCard from '../components/Home/StatsCard/StatsCard'

const Home: React.FC = () => {
  return (
    <Dashboard>
      <div className=' flex flex-col gap-8'>
        <div className=' flex flex-row items-center relative px-5 '>
          <TextCard />
          <ViewProfile />
        </div>

        <div className=' flex flex-row gap-5 px-5 w-[100%]'>
          <StatsCard title="Completed Challenges" stats='05' />
          <StatsCard title="Open Challenges" stats='200' />
          <StatsCard title="Ongoing Challenges" stats='200' />
        </div>
        
      </div>
    </Dashboard>
  )
}

export default Home