import Button from "../Button";
import { useState } from "react";

var showQuote = false;

function Insure(props)
{
    const [ showQuote, trigger ] = useState(false);
    return showQuote ? <InsureQuote /> : <InsureForm setTrigger={ trigger } />;
}

function InsureForm(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Insure</h1>
                <p>Username</p> <input type={ "text" } style={{height: "20px"}}></input>
                <p>Email</p> <input type={ "text" } style={{height: "20px"}}></input>
                <p>Period</p> 
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>5</option>
                    </select>
                &nbsp;Year
                <p>Estimated Monthly Inflow</p> <input type={ "number" } style={{ width: "147px", height: "20px" }}></input> ETH
                <p>Estimated Maximum Amount</p> <input type={ "number" } style={{ width: "147px", height: "20px" }}></input> ETH
                <p>Insurance Password</p> <input type={ "password" } style={{height: "20px"}}></input>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button onClick={ () => props.setTrigger(true) }>Get Quote</Button>
        </div>
        
    );

}

function InsureQuote()
{
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{fontSize: "40px"}}>Your Quote is 0.03 ETH!</p>
            <Button>Insure Now</Button>
        </div>
    );
}

export default Insure;