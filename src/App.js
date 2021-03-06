import './App.css';
import Topbar from './Components/Topbar'
import Popup from './Components/Popup';
import TopTileInvalid from './Components/TopTile/TopTileInvalid';
import TopTileValid from './Components/TopTile/TopTileValid';
import BottomTile from './Components/BottomTile'
import { useState } from 'react';
import React from 'react';
import Dashboard from './Dashboard';
import { adminAddress } from './build/abi';

var colorCode = '#d674c9';
document.body.style = 'background:' + colorCode;

function App() {
	const [defaultAccount, setDefaultAccount] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Available!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
			})
			.catch(error => {
        console.log("Error! Unable to render.");			
			});

		} else {
			console.log('Please install MetaMask!');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

	const chainChangedHandler = () => {
		window.location.reload();
	}

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);

  const [ buttonPopup, setButtonPopup ] = useState(false);
  const [ popUpContent, setPopUpContent] = useState(0);
  // 0 -> claim
  // 1 -> ticket
  // 2 -> info
  // 3 -> details
  // 4 -> insure
  // 5 -> change data

  var topTile = defaultAccount === null ? (
    <TopTileInvalid />
  ) : ( <TopTileValid setTrigger={ setButtonPopup } setPopUp={ setPopUpContent } account={ defaultAccount } /> );

  var dashboard = defaultAccount === adminAddress ? <Dashboard /> : '';
  return (
    <div>
      <Popup trigger={ buttonPopup } setTrigger={ setButtonPopup } color={colorCode} popupState={popUpContent} account={defaultAccount}/>
      <Topbar connect={ connectWalletHandler } account={ defaultAccount } setAccount={ setDefaultAccount } />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}></div>
        { dashboard }
        <div style={{ width: "10%" }}></div> 
      </div>
      <div style={{ height: "30px" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}></div>
        { topTile }
        <div style={{ width: "10%" }}></div>
      </div>
      <div style={{ height: "70px" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}></div>
        <BottomTile setTrigger={ setButtonPopup } setPopUp={ setPopUpContent } />
        <div style={{ width: "10%" }}></div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "60px" }}>
        <div style={{ width: "10%" }}></div>
        {/*<Alert display={ false } success = { false } message={ 'This is a message.' }/>*/}
        <div style={{ width: "10%" }}></div>
      </div>
    </div>
  );
}

export default App;