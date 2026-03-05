import React, { Suspense, useState } from 'react'

import ProgressCard from './components/ProgressCord/ProgressCard'
import ResolvedCard from './components/ResolvedCard/ResolvedCard'
import Navbar from './Navbar/Navbar'
import AvailableTickets from './components/AvailableTicket/AvailableTickets'
import { toast, ToastContainer } from 'react-toastify'


 
  const fetchTickets = async() => {
    const res = await fetch('/data.json')
    
    return res.json()
    

  }


export default function App() {

const promiseTickets = fetchTickets()




 const [selectedTicket, setSelectedTicket] = useState([])
 const [completedCount, setCompletedCount] = useState(0)
 
    

 
  const handleAddTicket = (tickets) => {
     const exists = selectedTicket.find(t => t.id === tickets.id)

     if(exists) {
     toast.error("Ticket already added!")
      return
     }
     
     toast.success("Ticket added successfully!")
     setSelectedTicket(prev => [...prev, tickets])
      
  }


   const handleCompleted = (id) => {
   toast.success("Task resolve successfully!")
    setSelectedTicket(prev => prev.filter(t => t.id !== id))
    setCompletedCount(prev => prev + 1)
  }
  
  return (
    <div>

      <Navbar></Navbar>

      <ToastContainer></ToastContainer>


      


    <div className="grid md:grid-cols-2 gap-6  bg-gray-100  p-6">
        
        {/* In Progress Card */}
      <ProgressCard count={selectedTicket.length}></ProgressCard>
 
        {/* Resolved Card */}
       <ResolvedCard count={completedCount}></ResolvedCard>

      </div>




      <Suspense fallback={
    <div className="flex gap-3 justify-center items-center py-10">
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  }>
    <AvailableTickets promiseTickets={promiseTickets}
    selectedTicket={selectedTicket}
     handleAddTicket={handleAddTicket} handleCompleted ={handleCompleted}></AvailableTickets>

      </Suspense>

      
    </div>
  )
}
