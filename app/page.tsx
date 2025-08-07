import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <h1 className="flex-1">This is home</h1>
    </div>
  )
}
