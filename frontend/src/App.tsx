import React from "react";
import './App.css';
import Posts from './components/Posts'
import User from './components/User'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<User />} />
        {/* <Route path="*">
          <div>Sorry that page doesn't exist </div>
        </Route> */}
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