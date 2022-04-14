import React, { useEffect, useRef, useState } from 'react'
import './App.css'
export default function App() {
  const [list, setList] = useState([])
  const divRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(function ([{ isIntersecting }]) {
      console.log(isIntersecting)
      if (isIntersecting) {
        console.log('哈哈哈')
        const arr = Array.from(new Array(10)).map((item) => Math.random())
        setList((list) => {
          if (list.length >= 100) {
            observer.unobserve(divRef.current)
            divRef.current.innerHTML = '没有更多数据'
          }
          return [...list, ...arr]
        })
      }
    })
    observer.observe(divRef.current)
  }, [])

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div ref={divRef}>加载更多...</div>
    </div>
  )
}
