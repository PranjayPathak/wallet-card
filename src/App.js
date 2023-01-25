import logo from './logo.svg';
import './App.scss';
import WalletCard from './components/WalletCard';
import { useState } from 'react';
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0];
    const balance = await provider.getBalance(accounts[0])

    setWalletAddress(account)
    setWalletBalance(ethers.utils.formatEther(balance));

  }
  return (
    <div className="App">
      <button className='btn' onClick={connectToMetamask}>CONNECT WALLET</button>
      <WalletCard walletAddress={walletAddress} walletBalance={walletBalance} />
    </div>
  );
}

export default App;
