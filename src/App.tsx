import './App.css'
import EightSpotsSpace from './Client/EightSpotsSpace/EightSpotsSpace'
import MainIntroImage from './Client/MainIntroImage/MainIntroImage'
import Food from './Client/Food/Food'
import Landmarks from './Client/Landmarks/Landmarks'
import Entertainment from './Client/Entertainment/Entertainment'
import Game from './Client/Game/Game'
import Festival from './Client/Festival/Festival'
import ReferenceBar from './Client/ReferenceBar/ReferenceBar'
import TopBar from './Client/ReferenceBar/TopBar'

function App() {
  return (
    <>
      <TopBar />
      <MainIntroImage />
      <EightSpotsSpace />
      <Food />
      <Landmarks />
      <Entertainment />
      <Game />
      <Festival />
      <ReferenceBar />
    </>
  )
}

export default App
