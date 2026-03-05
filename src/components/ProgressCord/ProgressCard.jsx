import React from 'react'
import bgImg from '../../assets/vector1.png'

export default function ProgressCard({ count }) {
  return (
    <div className="relative rounded-xl p-8 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-500 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="relative z-10">
        <h2 className="text-lg opacity-90">In-Progress</h2>
        <h1 className="text-5xl font-bold mt-2">{count}</h1>
      </div>

    </div>
  )
}