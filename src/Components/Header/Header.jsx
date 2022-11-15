import React from 'react'

import {useNavigate} from 'react-router-dom';

import "./Header.css";


const Header = () => {
    let navigate = useNavigate();
  return (
     <div className="headerDesign">
            <div className="leftside">
            <div className="appName" onClick={()=>setTimeout(()=>{navigate("/")},500)}>Movie API</div>
            </div>
            <div className="rightside">
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/")},500)}>Popular Movies</div>
            <div className="linkDesign" onClick={()=>setTimeout(()=>{navigate("/search")},500)}>Premium Search</div>
            </div>
    </div>
  )
}

export default Header