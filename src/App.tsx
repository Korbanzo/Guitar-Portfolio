import './App.css'
import Guitar from './components/Guitar';
import guitarPath from './assets/guitar.glb';
import Pretend_AlexG from "./assets/songs/Pretend-AlexG.mp4"
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

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <SongVideo path={Pretend_AlexG} title={"Pretend"} artist={"Alex G"} />
        <SongVideo path={Need2_Pinegrove} title={"Need2"} artist={"Pinegrove"} />
      </div>
    </main>
    
    </>
  );
}

export default App