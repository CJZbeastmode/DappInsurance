import Button from "../Button";

function Details(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color: props.color}}>Details</h1>
            <p style={{color: props.color}}>Username</p><p>cjz_beastmode</p>
            <p style={{color: props.color}}>Email</p><p>jay0816@outlook.com</p>
            <p style={{color: props.color}}>Wallet Address</p> <p>0x1234</p>
            <p style={{color: props.color}}>Due Time</p> <p>2022.01.01</p>
            <p style={{color: props.color}}>Estimated Monthly Inflow</p><p>0 ETH</p>
            <p style={{color: props.color}}>Estimated Maximum Amount</p><p>0 ETH</p>
            <div style={{ height: "30px" }}></div>
        </div>
        
    );
}

export default Details;