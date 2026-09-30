import './App.css'
import Guitar from './components/Guitar';
import guitarPath from './assets/guitar.glb';
import Pretend_AlexG from "./assets/songs/Pretend-AlexG.mp4"
import Nutshell_AliceInChains from "./assets/songs/Nutshell-AliceInChains.mp4"
import Need2_Pinegrove from "./assets/songs/Need2-Pinegrove.mp4"
import SongVideo from './components/SongVideo';


function App() { 
 
  return (
    <>
    <Guitar path={guitarPath} />

    <main>
      <header>
        <h1>Welcome.</h1>
      </header>

      <div className="song-video-banner">
        <SongVideo path={Pretend_AlexG} title={"Pretend"} artist={"Alex G"} />
        <SongVideo path={Need2_Pinegrove} title={"Need2"} artist={"Pinegrove"} />
      </div>

      <div className="song-video-banner">
        <SongVideo path={Nutshell_AliceInChains} title={"Nutshell"} artist={"Alice In Chains"} />
      </div>
    </main>
    
    </>
  );
}

export default App