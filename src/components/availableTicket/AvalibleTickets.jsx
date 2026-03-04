import React, { use } from 'react'
import TicketCard from '../TicketCard/TicketCard';
import Sidebar from '../../sidebar/Sidebar';



export default function AvalibleTickets({promiseTickets}) {
  const ticketsData = use(promiseTickets)  
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Customer Tickets */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Customer Tickets
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            

            {
              ticketsData?.map((tickets) => <TicketCard key={tickets.id} tickets = {tickets}></TicketCard>)
            }
          
          </div>
        </div>

        {/* Task Status Sidebar */}
        
       <Sidebar></Sidebar>
      </div>
    </div>
  )
}
