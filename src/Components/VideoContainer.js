import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const[videos,setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    },[]);

const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
} ;

 return(
        <div className="flex flex-wrap">
            {videos.map((video) => (
            <Link key = {video.id} to = {"/watch?v="+video.id} >
            <VideoCart  info = {video}/>
            </Link>
            ))}
           
        </div>
    );
};

export default VideoContainer;