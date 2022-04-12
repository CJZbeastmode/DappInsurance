import Button from "../Button";

function TopTileNotInsured(props)
{
    return (
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
            <p style={{ fontSize: "45px" }}>Your wallet hasn't yet been insured!</p>
            <div style={{ height: "30px" }}></div>
            <div>
                <Button style={{ marginRight: "10px" }} onClick={ () => { props.setPopUp(4); props.setTrigger(true); } }>Insure Now</Button>
                <Button style={{ marginLeft: "10px" }} onClick={ () => { props.setPopUp(2); props.setTrigger(true);} }>More Info</Button>
            </div>
            <div style={{ height: "30px" }}></div>
        </div>
    );
}

export default TopTileNotInsured;