import Button from "../Button";

function TopTileInsured(props)
{
    return (
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
            <p style={{ fontSize: "45px" }}>Your wallet is insured until 2022.01.01!</p>
            <div style={{ height: "30px" }}></div>
            <div>
                <Button onClick={ () => { props.setPopUp(3); props.setTrigger(true); }} style={{marginRight: "10px"}}>Details</Button>
                <Button onClick={ () => { props.setPopUp(5); props.setTrigger(true); }} style={{marginLeft: "10px"}}>Change Data</Button>
            </div>
            <div style={{ height: "30px" }}></div>
        </div>
    );
}

export default TopTileInsured;