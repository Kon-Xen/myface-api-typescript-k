import React from "react";
import './App.css';
import Posts from './components/Posts'
import User from './components/User'
import UserDetails from './components/UserDetails'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserDetails/>}/>
        <Route path="*" element={<div>Sorry that page doesn't exist </div>}/>      
      </Routes>
    </Router>
  )

  // return (
  //   <div>
  //     <Posts />
  //   </div>
  // );
}

export default App;