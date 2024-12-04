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
import { LightThemeContext } from './ThemeContext'
import { useContext } from 'react'
//import './index.css'

//some stuff to fix before using this

function App() {
  const { light } = useContext(LightThemeContext);

  return (
    <>

      <div className={`${light ? "" : "SubpageAppRoot"}`}>
        <TopBar />
        <MainIntroImage />
        <EightSpotsSpace />
        <Food />
        <Landmarks />
        <Entertainment />
        <Game />
        <Festival />
        <ReferenceBar />
      </div>

    </>
  )
}

export default App
