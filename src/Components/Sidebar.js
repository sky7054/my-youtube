import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;


  return (
    <div className='p-10 shadow-lg w-72'>  
      <ul>
        <li> <Link to ="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Lives</li>
      </ul>

      <hr className='mt-2 mb-2 font-bold'/>
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Likes</li>
        </ul>

        <hr className='mt-2 mb-2 font-bold'/>

      <h1 className='font-bold'>Subcriptions</h1>
    <ul>
        <li>Musics</li>
        <li>Movies</li>
        <ul>Sports</ul>
        <li>Games</li>
      </ul> 

      <hr className='mt-2 mb-2 font-bold'/>

      <p className='font-bold'>Explore</p>
      <ul>
        <li>Tranding</li>
        <li>Shoping</li>
        <li>Music</li>
        <li>Film</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learing</li>
        <li>Fashion & beauty</li>
        </ul> 
        <hr className='mt-2 mb-2 font-bold'/>
        <h1 className='font-bold'>Subcriptions</h1>
    <ul>
        <li>Musics</li>
        <li>Movies</li>
        <ul>Sports</ul>
        <li>Games</li>
      </ul> 
      
    </div>
  )
}

export default Sidebar;
