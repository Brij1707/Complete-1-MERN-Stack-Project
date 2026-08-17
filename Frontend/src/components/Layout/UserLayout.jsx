import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'

const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  )
}

export default UserLayout
