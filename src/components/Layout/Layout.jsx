import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import {AuthProvider} from '../../providers/AuthProvider'

const Layout = ({children}) => {
  return (
      <div className='max-h-screen'>
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
