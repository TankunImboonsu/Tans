import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/calculate">ไปหน้าคำนวณส่วนลด</Link></li>
        <li><Link to="/fetchapi">ไปหน้า Fetch API</Link></li>
      </ul>
    </div>
  )
}

export default Home