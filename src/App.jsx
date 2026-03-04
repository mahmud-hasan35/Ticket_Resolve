import React, { Suspense } from 'react'

import AvailableTickets from './Components/AvailableTicket/AvailableTickets'
import Navbar from './navbar/Navbar'
import ProgressCard from './components/ProgressCord/ProgressCard'
import ResolvedCard from './components/ResolvedCard/ResolvedCard'

 
  const fetchTickets = async() => {
    const res = await fetch('/data.json')
    
    return res.json()
    

  }


export default function App() {

const promiseTickets = fetchTickets()
 
    
  
  return (
    <div>

      <Navbar></Navbar>


      


    <div className="grid md:grid-cols-2 gap-6  bg-gray-100  p-6">
        
        {/* In Progress Card */}
      <ProgressCard></ProgressCard>

        {/* Resolved Card */}
       <ResolvedCard></ResolvedCard>

      </div>




      <Suspense fallback={'Data loading ......'}>
    <AvailableTickets promiseTickets={promiseTickets}></AvailableTickets>

      </Suspense>

      
    </div>
  )
}
