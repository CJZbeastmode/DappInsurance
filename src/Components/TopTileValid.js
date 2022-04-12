import TopTileInsured from "../TopTile/TopTileInsured";
import TopTileInvalid from "../TopTile/TopTileInvalid";
import TopTileNotInsured from "../TopTile/TopTileNotInsured";
import { useEthers } from "@usedapp/core";

function TopTile(props)
{
    const { account }  = useEthers();
    const isConnected = account !== undefined;

    /*
    if (isConnected) props.setState(2);
    else props.setState(0);
    */

    /*
    var topTile;
    switch (props.state)
    {
      case 0 : topTile = <TopTileInvalid />; break;
      case 1 : <TopTileInsured setTrigger={ props.setButtonPopup } setPopUp={ props.setPopUpContent }/>; break;
      case 2 : <TopTileNotInsured setTrigger={ props.setButtonPopup } setPopUp={ props.setPopUpContent }/>; break;
    }
    */

    return (
        <TopTileInsured />
    );
}

export default TopTile;