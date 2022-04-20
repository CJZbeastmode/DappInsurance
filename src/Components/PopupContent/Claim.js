import Button from "../Button";
import { appendClaim, getDetails } from "../../database";
import hash from "../../hash";

function Claim(props) {
    console.log(getDetails(props.account));
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Claim</h1>
                <p>Wallet Account</p> 0x<input id="account" type={"text"} defaultValue={ props.account === null ? "" : props.account.substring(2,)}></input>
                <p>Contact Email</p> <input id="email" type={"text"}></input>
                <p>Reason</p> 
                    <select id="reason">
                        <option>(Please Select a Reason)</option>
                        <option>I forgot the recovery phrase.</option>
                        <option>My physical devices are hacked.</option>
                        <option>My wallet is hacked</option>
                        <option>I'm phished.</option>
                    </select>
                <p>Description</p><textarea id="description"></textarea>
                <p>Secret Phrase</p> <input id="sf" type={ "password" } style={{height: "20px"}}></input>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button onClick={() => submit(props)}>Submit</Button>
        </div>
        
    );
}

function submit(props)
{
    var account = String('0x' + document.getElementById('account').value);
    var email = document.getElementById('email').value;
    var reason = document.getElementById('reason').value;
    var description = document.getElementById('description').value;
    var sf = hash(document.getElementById('sf').value);
    console.log(sf);
    var exists = getDetails(account).length !== 0;
    console.log(getDetails(account).get('secretPhrase'));

    if (account === '' || email === '' || !email.includes('@', 0) || reason === '(Please Select a Reason)' || description === '')
    {
        alert("Failure: At least one of the fields is invalid!");
    }
    else
    {
        if (!exists) alert("Failure: Your wallet is not insured!");
        else
        {
            if (sf !== getDetails(account).get('secretPhrase')) alert("Failure: Secret Phrases do not match!");
            else
            {
                appendClaim(account, email, reason, description);
                alert("Success!");
                props.setTrigger(false);
            }
        }
    }  
   
}

export default Claim;