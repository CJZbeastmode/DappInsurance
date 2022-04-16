import './App.css';
import Topbar from './Components/Topbar'
import Popup from './Components/Popup';
import TopTileInvalid from './Components/TopTile/TopTileInvalid';
import TopTileValid from './Components/TopTile/TopTileValid';
import BottomTile from './Components/BottomTile'
import Alert from './Components/Alert';
import { useState } from 'react';
import React from 'react';
import sendTransaction from './web3';
import Dashboard from './Dashboard';
import { adminAddress } from './build/abi';

var colorCode = '#d674c9';
document.body.style = 'background:' + colorCode;

function App() {
	const [defaultAccount, setDefaultAccount] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
			})
			.catch(error => {
        console.log("Error!");			
			});

		} else {
			console.log('Need to install MetaMask');
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
  console.log(adminAddress);
  console.log(defaultAccount);
  return (
    <div>
      <Popup trigger={ buttonPopup } setTrigger={ setButtonPopup } color={colorCode} popupState={popUpContent} account={defaultAccount}/>
      <Topbar connect={ connectWalletHandler } account={ defaultAccount } setAccount={ setDefaultAccount } />
      { dashboard }
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

/*

1, Insurance
Due Date
Wallet_Address
Estimated Max Amount
Estimated Monthly Inflow
Secret Phrase

2, Transactions
Wallet_Address
Paid_Date
Paid_Fee
*/

/*
3, Claim
Claim_ID
Insurance_ID
Type
Description

Forgotten Phrase
Physical Devices Hacked
Wallet Hacked
Phished
Others: _____

4, Ticket
Ticket_ID
Title
Category
Content
Email
*/
