import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
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

    </div>
    <div className="footer__center">
    <ShuffleIcon className="footer__green"/>
    <SkipPreviousIcon className='footer__icon' />
    <PlayCircleOutlineIcon className='footer__icon' fontSize="large"/>
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