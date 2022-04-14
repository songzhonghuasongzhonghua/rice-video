import { useEffect, useRef } from 'react'
import riceVideo from '../../assets/rice.mp4'
import style from './index.module.scss'
const Player = () => {
  const ivideo = useRef()
  const icontroller = useRef()

  //   const ivideo = document.getElementById('ivideo')
  //   const icontroller = document.getElementById('icontroller')
  //   useEffect(() => {
  //     ivideo.addEventListener('mouseenter', () => {
  //       // console.log('mouseenter')
  //       icontroller.style.bottom = 0
  //     })
  //     ivideo.addEventListener('mouseleave', () => {
  //       // console.log('mouseleave')
  //       icontroller.style.bottom = '-30px'
  //     })
  //   }, [ivideo, icontroller])

  return (
    <div className={style.root}>
      <video
        className={style.video}
        id="ivideo"
        src={riceVideo}
        // ref={ivideo}
      ></video>
      <div
        className={style.controller}
        id="icontroller"
        // ref={icontroller}
      ></div>
    </div>
  )
}

export default Player
