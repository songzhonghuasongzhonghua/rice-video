import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const divRef = useRef(null)
  const [list, setList] = useState([])
  // 获取list数据
  const getList = () => {
    // 发送ajax请求获取数据
    // axios.get()
    // 将得到的list赋值给list
    // setList(value)
  }
  // 点击搜索按钮
  const onSearch = async () => {
    if (!value.trim()) return
    // loading效果显示与隐藏
    setLoading(true)
    await getList(value)
    setLoading(false)
  }

  // 搜索框敲击回车搜索
  const onKey = (e) => {
    if (e.keyCode === 13) {
      onSearch()
    }
  }

  useEffect(() => {
    getList()
    const observer = new IntersectionObserver(function ([{ isIntersecting }]) {
      if (isIntersecting) {
        // mock一份li元素的数据
        const arr = Array.from(new Array(10)).map((item) => Math.random())
        setList((list) => {
          return [...list, ...arr]
        })
      }
    })
    observer.observe(divRef.current)
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKey}
        />
        <button onClick={onSearch}>搜索</button>
      </div>
      <div>
        {loading ? (
          <div>loading</div>
        ) : (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <div ref={divRef}></div>
          </ul>
        )}
      </div>
    </div>
  )
}
