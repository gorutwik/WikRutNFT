import { useState } from 'react';
import './App.css';
import CenterNFTMint from './CenterNFT';
import LoginOptions from './LoginOptions';


function App() {

  const [accounts, setAccounts] = useState([]);

  return (
    <div className='overlay'>
      <div className="App">
        <LoginOptions accounts={accounts} setAccounts={setAccounts}/>
        <CenterNFTMint accounts={accounts} setAccounts={setAccounts}/>
        
      </div>
      <div className='moving-background'></div>
    </div>
  );
}

export default App;
