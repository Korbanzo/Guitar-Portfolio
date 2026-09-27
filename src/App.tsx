import './App.css'
import Pretend_AlexG from "./assets/songs/Pretend-AlexG.mp4"
import Need2_Pinegrove from "./assets/songs/Need2-Pinegrove.mp4"
import SongVideo from './components/SongVideo';

function App() {
  return (
    <>
    <header>
      <h1>Welcome.</h1>
    </header>
    
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
      <SongVideo path={Pretend_AlexG} title={"Pretend - Alex G"}></SongVideo>
      <SongVideo path={Need2_Pinegrove} title={"Need2 - Pinegrove"}></SongVideo>
    </div>
    </>
  );
}

export default App
