function TopTileInvalid()
{
    var text = window.ethereum && window.ethereum.isMetaMask 
    ? <p style={{ fontSize: "45px" }}>Connect Your Wallet to Proceed!</p>
    :  <p style={{ fontSize: "45px" }}>Please Install Metamask!</p>;
    return (
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
            {text}
        </div>
    );
}

export default TopTileInvalid;