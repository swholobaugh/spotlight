import React from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "./Home/Home.jsx"
import Nominate from "./Nominate/Nominate.jsx"
import About from "./About/About.jsx"
import Hall from "./Hall/Hall.jsx"
import Profile from "./Profile/Profile.jsx"
import Vote from "./Vote/Vote.jsx"
import { AuthProvider, useAuth } from '../providers/AuthProvider'
import AuthPage from './AuthPage/AuthPage.jsx'

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Component {...rest} /> : <Navigate to='/auth' />;
}

const Pages = (props) => {
  return (
    <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path='/auth' element={<AuthPage />} />
          <Route path="/login" element={<Navigate to="/auth" />} />
          <Route path="/signup" element={<Navigate to="/auth" />} />
          <Route exact path="/" element={<Home />}/>
          <Route path="/nominate" element={<ProtectedRoute element={Nominate} />} />
          <Route path="/vote" element={<ProtectedRoute element={Vote} />} />
          <Route path="/about" element={<About />} />
          <Route path="/hof" element={<Hall />} />
          <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        </Routes>
      </Layout>
    </Router>
    </AuthProvider>
  )
}

export default Pages
