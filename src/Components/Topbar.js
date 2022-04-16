import styled from "styled-components";

function Topbar(props) {
    var isConnected = props.account !== null;
    var button = isConnected
    ? <Button onClick={ () => props.setAccount(null) }>Disconnect</Button>
    : <Button onClick={ () => props.connect() }>Connect</Button>;
    var dashboardButton = props.account === '0x3221a67f25507812a16664f191f030b247d17773' ? <Button>Dashboard</Button> : '';

    return (
        <div style={{ height: "100px", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%" }}>
                <p style={{ fontSize: "20px", margin: "20px 0 0 20px", color: "white" }}>DappInsurance</p>
            </div>
            <div style={{ width: "50%", textAlign: "right" }}>
                { button }
                { dashboardButton }
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
  