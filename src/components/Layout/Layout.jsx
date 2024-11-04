import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <Card>
          {children}
        </Card>
      </main>
    </div>
  )
}

export default Layout