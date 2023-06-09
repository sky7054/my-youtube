const GOOGLE_API_KEY = "AIzaSyAVTzI-Af0vSGS1EVVN9-8k28znn-jlBt0";


export const YOUTUBE_VIDEOS_API = 
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + 
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";