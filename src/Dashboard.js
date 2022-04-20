import { getClaim, getTicket, deleteClaim, deleteTicket } from "./database";
import { withdraw } from "./database";

function Dashboard()
{
    const claims = getClaim();
    var claimArray = [];
    claims.forEach(i => {
        if (i[1].size === 4)
            claimArray.push(
                <div style={{ textAlign: 'left', margin: '0 20px 20px 20px', padding: '0 0 10px 10px', border: "1px solid black"}}>
                    <p>Wallet: {i[1].get('account')}</p>
                    <p>Email: {i[1].get('email')}</p>
                    <p>Reason: {i[1].get('reason')}</p>
                    <p>Description: {i[1].get('description')}</p>
                    <button onClick={() => {
                        deleteClaim(i[0]);
                    }}>Addressed</button>
                </div>
            );
    });

    const tickets = getTicket();
    var ticketArray = [];
    tickets.forEach(i => {
        if (i[1].size === 4)
            ticketArray.push(
                <div style={{ textAlign: 'left', margin: '0 20px 20px 20px', padding: '0 0 10px 10px', border: "1px solid black"}}>
                    <p>Wallet: {i[1].get('email')}</p>
                    <p>Email: {i[1].get('title')}</p>
                    <p>Reason: {i[1].get('category')}</p>
                    <p>Content: {i[1].get('desciption')}</p>
                    <button onClick={() => {
                        deleteTicket(i[0]);
                    }}>Addressed</button>
                </div>
            );
    });    
    
    return (   
        <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
           <div style={{ height: "20px" }}></div>
           <div style={{ textAlign: "left", display: "flex", flexDirection: "row" }}>
                <p style={{ marginLeft: "20px", fontSize: "20px", color: "#d674c9" }}>Dashboard</p>
                <input id="wallet" style={{ marginLeft: "20px" }} type={"text"} defaultValue={"0x"}></input>
                <input id="amount" style={{ marginLeft: "20px" }} type={"text"} placeholder={"amount"}></input>
                <button style={{ marginLeft: "20px" }} onClick={() => {
                    var wallet = document.getElementById("wallet").value;
                    var amount = document.getElementById("amount").value;
                    withdraw(wallet, amount);
                    alert('Success!');
                    document.getElementById("wallet").value = "0x";
                    document.getElementById("amount").value = ""; 
                }}>Payout</button>
           </div>
           <div style={{ textAlign: "left", display: "flex", flexDirection: "row" }}>
              <div style={{ width: "50%" }}>
                <p style={{ marginLeft: "20px", fontSize: "20px", color: "#d674c9" }}>Claims</p>
              </div>
              <div style={{ width: "50%" }}>
                <p style={{ fontSize: "20px", color: "#d674c9" }}>Tickets</p>
              </div>
           </div>
           <div style={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}>
                <div style={{ width: "50%", borderRight: "1px solid #d674c9" }}>
                   {claimArray}
                </div>

                <div style={{ width: "50%", borderLeft: "1px solid #d674c9" }}>
                   {ticketArray}
                </div>

           </div>
        </div>  
    );
}

export default Dashboard;