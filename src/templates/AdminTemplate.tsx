import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminTemplate() {
  return (
    <div>
        <Outlet />
    </div>
  )
}