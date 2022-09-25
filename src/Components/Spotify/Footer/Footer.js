import React from 'react'
import "./Footer.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';



function Footer() {
  return (
    <div className='footer'>
    <div className="footer__left">
    <img src="https://static-cse.canva.com/blob/930600/1600w-eTDWmXsrk3g.jpg" className="footer__albumlogo" alt="" />
    <div className="song__info">
      <h4>Yo Yo</h4>
      <p>description</p>
    </div>
    </div>
    <div className="footer__center">
    <ShuffleIcon className="footer__green"/>
    <SkipPreviousIcon className='footer__icon' />
    <PlayCircleIcon className='footer__icon' fontSize="large"/>
    <SkipNextIcon  className='footer__icon'/>
    <RepeatIcon className="footer__green"/>

    </div>
    <div className="footer__right">
    
    <PlaylistAddIcon />
    <VolumeDownIcon icon-volume/>
    <div class="volume-level-bar">
    <div className="volume-level-current">
      
    </div>
    </div>
  </div>
    
    </div>
  )
}

export default Footer