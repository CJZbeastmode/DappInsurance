import './App.css';
import Topbar from './Components/Topbar'
import TopTileInsured from './Components/TopTile/TopTileInsured';
import TopTileInvalid from './Components/TopTile/TopTileInvalid';
import TopTileNotInsured from './Components/TopTile/TopTileNotInsured';
import BottomTile from './Components/BottomTile'
import Popup from './Components/Popup';
import { useState } from 'react';
import { DAppProvider, ChainId, useEthers } from '@usedapp/core';

var colorCode = '#d674c9';
document.body.style = 'background:' + colorCode;

function App() {
  const { account }  = useEthers();
  const isConnected = account !== undefined;

  const [ buttonPopup, setButtonPopup ] = useState(false);
  const [ popUpContent, setPopUpContent] = useState(0);
  // 0 -> claim
  // 1 -> ticket
  // 2 -> info
  // 3 -> details
  // 4 -> insure
  // 5 -> change data
  const [ topTileInvalid, triggerTopTile ] = useState(!isConnected);

  return (
    <DAppProvider config={{
      networks: [ChainId.Kovan, ChainId.Rinkeby, ChainId.Mainnet]
    }}>
    <div>
      <Popup trigger={ buttonPopup } setTrigger={ setButtonPopup } color={colorCode} popupState={popUpContent}/>
      <Topbar triggerTopTile={ triggerTopTile } />
      <div style={{ height: "3 0px" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}></div>
        { topTileInvalid ? (
          <TopTileInvalid triggerTopTile={ triggerTopTile } />
        ) : (
          <TopTileInsured setTrigger={ setButtonPopup } setPopUp={ setPopUpContent }/>
        )
        }
        <div style={{ width: "10%" }}></div>
      </div>
      <div style={{ height: "70px" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "10%" }}></div>
        <BottomTile setTrigger={ setButtonPopup } setPopUp={ setPopUpContent } />
        <div style={{ width: "10%" }}></div>
      </div>
    </div>
    </DAppProvider>
  );
}

export default App;
