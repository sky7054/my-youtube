import React from 'react'

const VideoCart = ({ info }) => {


       const { snippet, statistics } = info;
        const { channelTitle, thumbnails, title } = snippet;


  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='thumbnails' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} views</li>
      </ul> 

    </div>
  );
 
};

export default VideoCart;
