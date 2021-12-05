import React, {useState} from 'react';
import Hobi from './components/hobi';
import Selingkuhan from './components/selingkuhan'
import './App.css';

function App() {
  const [getNamaPacar, setNamaPacar] = useState("belum punya pacar");
  const [getPacar, setPacar] = useState("belum ada");

  return (
    <div>
     
      <p>calon pacar kamu: {getPacar}</p>
      <input type="text" placeholder="ketik pacar kamu" onChange={(x) => setPacar(x.target.value)}/>
      <button onClick={() => setNamaPacar(getPacar)}>set pacar baru</button>
      <Hobi/>
      <Selingkuhan nama={getNamaPacar}/>
    </div>
  );
}

export default App;