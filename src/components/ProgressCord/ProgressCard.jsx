import React from 'react'

export default function ProgressCard({count}) {
  return (
        <div className="relative rounded-xl p-8 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-500 overflow-hidden">
          <h2 className="text-lg opacity-90">In-Progress</h2>
          <h1 className="text-5xl font-bold mt-2">{count}</h1>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
  )
}
