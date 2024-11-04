import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "./Home/Home.jsx"
import About from "./About/About.jsx"
import Contact from "./Contact/Contact.jsx"
import Profile from "./Profile/Profile.jsx"

const Pages = (props) => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Pages
