import styled from "styled-components";
import { useEthers } from '@usedapp/core'; 

function Topbar(props) {    
    const { account, activateBrowserWallet, deactivate }  = useEthers();
    const isConnected = account !== undefined;

    var button = isConnected
    ? <Button onClick={ () => { deactivate(); props.triggerTopTile(true); } }>Disconnect</Button>
    : <Button onClick={ () => { activateBrowserWallet(); props.triggerTopTile(false); } }>Connect</Button>;

    return (
        <div style={{ height: "100px", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%" }}>
                <p style={{ fontSize: "20px", margin: "20px 0 0 20px", color: "white" }}>DappInsurance</p>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
                { button }
            </div>
        </div>   
    );
}

const Button = styled.button`
    font-size: 16px;
    height: 40px;
    width: 160px;
    background-color: #d674c9;
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid white;
    outline: 0;
    margin: 20px 20px 0 0;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: white;
        color: #d674c9;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;



export default Topbar;
  