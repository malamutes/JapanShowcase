import './App.css'
import EightSpotsSpace from './Client/Mainpage/EightSpotsSpace/EightSpotsSpace'
import MainIntroImage from './Client/Mainpage/MainIntroImage/MainIntroImage'
import Food from './Client/Mainpage/Food/Food'
import Landmarks from './Client/Mainpage/Landmarks/Landmarks'
import Entertainment from './Client/Mainpage/Entertainment/Entertainment'
import Game from './Client/Mainpage/Game/Game'
import Festival from './Client/Mainpage/Festival/Festival'
import ReferenceBar from './Client/Mainpage/ReferenceBar/ReferenceBar'
import TopBar from './Client/Mainpage/ReferenceBar/TopBar'
import { useState, useLayoutEffect, useEffect } from 'react'
import WebsiteIntro from './Client/Mainpage/WebsiteIntro/WebsiteIntro'

//import './index.css'

//some stuff to fix before using this

function App() {
  const [firstVisit, setFirstVisit] = useState(false);
  const [intro, setIntro] = useState(false);

  useLayoutEffect(() => {
    const firstVisit = sessionStorage.getItem('firstVisit');
    if (!firstVisit) {
      setFirstVisit(true);
      sessionStorage.setItem('firstVisit', 'false');
    }
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div >
        {firstVisit ? (<WebsiteIntro />) : (null)}
        {intro ? (<>
          <TopBar />
          <MainIntroImage />
          <EightSpotsSpace />
          <Food />
          <Landmarks />
          <Entertainment />
          <Game />
          <Festival />
          <ReferenceBar />
        </>) : (null)}

      </div>
    </>
  )
}

export default App
