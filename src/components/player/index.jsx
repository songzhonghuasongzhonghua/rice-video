import riceVideo from '../../assets/rice.mp4'
import style from './index.module.scss'
const Player = () => {
  return (
    <div className={style.root}>
      <video className={style.video} src={riceVideo} autoPlay></video>
    </div>
  )
}

export default Player
