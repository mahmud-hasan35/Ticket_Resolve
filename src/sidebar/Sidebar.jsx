import React from 'react'

export default function Sidebar() {
  return (
    <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Task Status
          </h2>
           <p className="text-gray-400 text-sm ">
              Select a ticket to add to Task Status
            </p>

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
