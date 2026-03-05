import React from 'react'

export default function Sidebar({selectedTicket, handleCompleted}) {
  console.log(selectedTicket);
  
  return (
    <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Task Status
          </h2>
          {selectedTicket.length === 0 ? (<p>Select a ticket to add to Task Status</p>): (
            selectedTicket.map(ticket => (
<div
  key={ticket.id}
  className="flex justify-between items-center mb-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
>
  <div>
    <p className="text-sm font-semibold text-gray-800">
      {ticket.title}
    </p>
    <p className="text-xs text-gray-400 mt-1">
      Ticket ID: #{ticket.id}
    </p>
  </div>

  <button
    onClick={() => handleCompleted(ticket.id)}
    className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-medium transition duration-200 shadow-sm hover:shadow-md"
  >
    Complete
  </button>
</div>
            ))
          )}


          <div className="mt-5">
            <h3 className="font-semibold text-xl text-gray-600 mb-2 ">
              Resolved Task
            </h3>
            <p className="text-gray-400 text-sm">
              No resolved tasks yet.
            </p>
          </div>
        </div>
  )
}
