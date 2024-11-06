import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Nominate from "./Nominate/Nominate.jsx"
import About from "./About/About.jsx"
import HallOfFame from "./HallOfFame/HallOfFame.jsx"
import Profile from "./Profile/Profile.jsx"

const Pages = (props) => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Nominate/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/hof" element={<HallOfFame/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Pages
