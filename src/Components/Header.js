import React, { useEffect, useState } from "react";
import Hamburger from "../assets/img/menu.png";
import youtubeLogo from "../assets/img/youtubeLogo.jpg";
import userLogo from "../assets/img/userLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const[suggestion,setSuggestion] = useState([]);

  const[showSuggestion,setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //API CALL

    /**
     * make an api call ever key press
     * but if difference b/w 2 API call
     * decline api call
     */
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery]);
      }
      else{
        getSearchSuggetions();
      }
      
      },200);


    return() => {
      clearTimeout(timer);
    }
    /**
     * key - i
     * - render the component 
     * - useEffect()
     * - start timer = make an api call after 200ms 
     * 
     * key - ip
     * destory the component(return() call)
     * - re-render the component 
     * - useEffect 
     * - - start timer = make an api call after 200ms 
     * */

  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };



  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          onClick={() => toggleMenuHandler()}
          src={Hamburger}
        />
        <a href="/">
          <img
            className="h-8 mx-3 cursor-pointer"
            alt="youtube-logo"
            src={youtubeLogo}
          />
        </a>
      </div>
        <div className="col-span-10 px-16">
          <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={ () => setShowSuggestion(true)}
            onBlur={ () => setShowSuggestion(false)}
            placeholder="Search"
          />
          <button className="border border-gray-400 p-2 rounded-r-full hover:bg-gray-100">
           🔍 
          </button>
         </div>
         { showSuggestion && (
         <div className="fixed py-2 px-5 shadow-lg bg-white rounded-lg w-[27rem]">
            <ul> 
              {suggestion.map((s) =>(<li key={s} className="px-2 py-2 shadow-sm hover:bg-gray-200">🔍 {s} </li> ))}       
            </ul>
         </div>
         ) }
        </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={userLogo}></img>
      </div>
    </div>
  );
};

export default Header;
