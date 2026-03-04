import React from 'react'

export default function TicketCard({ tickets }) {
    console.log(tickets);
    const {title,status,priority,description,createdAt,customer} = tickets


    
  return (
     <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800 text-sm">
          {title}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            status === "Open"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex justify-between items-center text-xs">
        <div className='space-x-2'>
         <span className="text-gray-400">#{1000+tickets.id}</span>
        <span
          className={`font-semibold ${
            priority.includes("HIGH",)
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          {priority} PRIORITY
        </span>

        </div>

       
        <div>
            
<p className="flex items-center gap-2 text-xs text-gray-400">
    <span>{customer}</span>
  <i className="fa-regular fa-calendar"></i>
  <span>{createdAt}</span>
</p>        </div>
      </div>

    </div>
  )
}
