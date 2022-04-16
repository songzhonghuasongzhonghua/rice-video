import riceVideo from '../../assets/rice.mp4'
import '../../assets/iconfont/iconfont.css'
import { useEffect, useRef } from 'react'
const Player = () => {
  const pausedIcon = useRef(null)
  const pausedBtn = useRef(null)
  const videoContent = useRef(null)
  const progressLoad = useRef(null)
  const ivideo = useRef(null)
  const fullScreen = useRef(null)
  const videoController = useRef(null)
  const btnVolume = useRef(null)
  const volumeLoad = useRef(null)
  const volumeMain = useRef(null)

  //play or pause
  const togglePlayOrPauseVideo = () => {
    if (ivideo.current.paused) {
      ivideo.current.play()
      pausedIcon.current.style.opacity = 0
      pausedBtn.current.className = 'btn-pause iconfont  icon-zanting1'
    } else {
      ivideo.current.pause()
      pausedIcon.current.style.opacity = 1
      pausedBtn.current.className = 'btn-pause iconfont icon-24gf-playCircle'
    }
  }

  //full screen
  const videoFullScreen = () => {
    if (!document.fullscreenElement) {
      videoContent.current.requestFullscreen()
      fullScreen.current.className =
        'btn-full-screen iconfont icon-tuichuquanping-copy'
    } else {
      document.exitFullscreen()
      fullScreen.current.className = 'btn-full-screen iconfont icon-quanping1'
    }
  }

  // progress bar
  const onProgressLoad = () => {
    const totalTime = ivideo.current.duration
    const currentTime = ivideo.current.currentTime
    if (ivideo.current.ended) {
      pausedIcon.current.style.opacity = 1
      pausedBtn.current.className = 'btn-pause iconfont icon-24gf-playCircle'
    }
    progressLoad.current.style.width = `${(currentTime / totalTime) * 100}%`
  }

  // move progress bar
  const onMoveProgress = (e) => {
    const currentProgressWidth =
      e.clientX - videoController.current.getBoundingClientRect().x
    const totalProgressWidth = videoController.current.offsetWidth

    const currentPercentage = currentProgressWidth / totalProgressWidth

    progressLoad.current.style.width = `${currentPercentage * 100}100%`
    ivideo.current.currentTime = ivideo.current.duration * currentPercentage
  }

  // toggle volume
  const toggleVolum = () => {
    // console.dir(ivideo.current)
    if (ivideo.current.muted) {
      ivideo.current.muted = false
      btnVolume.current.className = 'btn-volum iconfont icon-shengyin_shiti'
    } else {
      ivideo.current.muted = true
      btnVolume.current.className = 'btn-volum iconfont icon-24gf-volumeCross'
    }
  }

  // remove volume progress
  // const removeVolumeProgress = (e) => {
  //   console.log(e.clientY)
  //   console.log(volumeMain.current.getBoundingClientRect().y)
  // }

  // useEffect(() => {
  //   volumeLoad.current.style.height = `${ivideo.current.volume * 4}rem`
  // }, [])

  return (
    <div className="content">
      <div className="video-box">
        <div className="video-content" ref={videoContent}>
          {/* pause btn */}
          <i
            className="iconfont  icon-24gf-playCircle  video-pause"
            ref={pausedIcon}
          ></i>

          {/* player */}
          <video
            src={riceVideo}
            className="video"
            ref={ivideo}
            onClick={() => {
              togglePlayOrPauseVideo()
            }}
            onTimeUpdate={() => {
              onProgressLoad()
            }}
          ></video>
          {/* controller */}
          <div className="video-controller" ref={videoController}>
            {/* progress bar */}
            <div
              className="video-progress"
              onClick={(e) => {
                onMoveProgress(e)
              }}
            >
              <span className="progress-main"></span>
              <span className="progress-load" ref={progressLoad}></span>
            </div>
            {/*contronl btn */}
            <div className="video-btn">
              <div className="btn-left">
                <span
                  ref={pausedBtn}
                  className="btn-pause iconfont  icon-24gf-playCircle "
                  onClick={() => {
                    togglePlayOrPauseVideo()
                  }}
                ></span>
              </div>
              <div className="btn-right">
                {/* <span> */}
                <span
                  ref={btnVolume}
                  className="btn-volum iconfont icon-shengyin_shiti"
                  onClick={() => {
                    toggleVolum()
                  }}
                ></span>

                {/* <span className="volume-progress">
                    <div style={{ width: '3rem' }}>
                      <span
                        className="volume-main"
                        ref={volumeMain}
                        onClick={(e) => {
                          removeVolumeProgress(e)
                        }}
                      ></span>
                      <span className="volume-load" ref={volumeLoad}></span>
                    </div>
                  </span> */}
                {/* </span> */}

                <span
                  className="btn-full-screen iconfont icon-quanping1 "
                  ref={fullScreen}
                  onClick={() => {
                    videoFullScreen()
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
