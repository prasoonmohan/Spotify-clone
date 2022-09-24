import React from 'react'
import SidebarOptions from './Sidebar options/SidebarOptions'
import "./Sidebar.css"
// mui  icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "../DataLayer";
function Sidebar() {

  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
    
    <img className='sidebar__logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
    
    <SidebarOptions title="Home" Icon={HomeIcon}/>
    <SidebarOptions title="Search" Icon={SearchIcon}/>
    <SidebarOptions title="Your Library" Icon={LibraryMusicIcon}/>

    <br />
    <strong className='sidebar__title'>PLAYLIST</strong>
    <hr />

    {playlists?.items?.map(playlists => (
    <SidebarOptions title={playlists.name} />

    ))}
    </div>
  )
}

export default Sidebar;