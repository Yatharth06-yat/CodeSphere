import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './MainLayout.css'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="cs-layout">
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />
      <div className="cs-layout__body">
        <Sidebar isOpen={sidebarOpen} />
        <main className="cs-layout__content">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  )
}
