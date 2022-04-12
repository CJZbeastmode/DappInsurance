import Button from "../Button";
import { useEthers } from "@usedapp/core";

function TopTileInvalid(props)
{
    const { activateBrowserWallet }  = useEthers();
    return (
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
            <p style={{ fontSize: "45px" }}>Connect Your Wallet to Proceed!</p>
            <div style={{ height: "30px" }}></div>
            <div>
                <Button onClick={ () => { activateBrowserWallet(); props.triggerTopTile(); }}>Connect</Button>
            </div>
            <div style={{ height: "30px" }}></div>
            
            
        </div>
    );
}

export default TopTileInvalid;