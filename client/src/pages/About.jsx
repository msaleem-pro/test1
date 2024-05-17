import React, { useEffect, useState } from 'react'

const About = () => {
  const [msg, setMsg] = useState(null)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:8080/about')
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

export default About