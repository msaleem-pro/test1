import React, { useEffect, useState } from 'react'

const Home = () => {
  const [msg, setMsg] = useState(null)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:8080/')
      const result = await res.json()
      setMsg(result.msg)
    } catch (error) {

    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='heading'>{msg}</div>
  )
}

export default Home