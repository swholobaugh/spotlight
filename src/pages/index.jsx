import React from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "./Home/Home.jsx"
import Nominate from "./Nominate/Nominate.jsx"
import About from "./About/About.jsx"
import HallOfFame from "./HallOfFame/HallOfFame.jsx"
import Profile from "./Profile/Profile.jsx"
// import Login from "./Login/Login.jsx"
// import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx"
import { AuthProvider, useAuth } from '../providers/AuthProvider'
import AuthPage from './AuthPage/AuthPage.jsx'

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Component {...rest} /> : <Navigate to='./auth' />;
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
          <Route exact path="/" element={<ProtectedRoute element={Home} />}/>
          <Route path="/nominate" element={<ProtectedRoute element={Nominate} />}/>
          <Route path="/about" element={<ProtectedRoute element={About} />}/>
          <Route path="/hof" element={<ProtectedRoute element={HallOfFame} />}/>
          <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
        </Routes>
      </Layout>
    </Router>
    </AuthProvider>
  )
}

export default Pages
