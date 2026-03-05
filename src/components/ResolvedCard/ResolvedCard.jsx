import React from 'react'
import bgImg from '../../assets/vector1.png'

export default function ResolvedCard({ count }) {
  return (
    <div
      className="relative rounded-xl text-center p-8 text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-700/80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-lg opacity-90">Resolved</h2>
        <h1 className="text-5xl font-bold mt-2">{count}</h1>
      </div>

    </div>
  )
}