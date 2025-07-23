import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 10000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div>
      <h2>Page not found 404</h2>
      <p>ขออภัย ไม่พบหน้าที่คุณค้นหา</p>
      <p>กำลังกลับสู่หน้าแรกใน 10 วินาที...</p>
      <Link to="/">กลับสู่หน้าแรก</Link>
    </div>
  )
}

export default NotFound