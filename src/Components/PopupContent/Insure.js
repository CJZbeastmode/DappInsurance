import Button from "../Button";
import { useState } from "react";
import getQuote from "../../helpful_scripts";
import { purchaseInsurance, getDetails, addTransaction, getToday } from "../../database";
import Web3 from "web3";
import { contractAddress, abi } from "../../build/abi";
import detectEthereumProvider from "@metamask/detect-provider";


function Insure(props)
{
    const [ datastorage, setDatastorage ] = useState(null);
    const [ showQuote, trigger ] = useState(false);
    return showQuote ? <InsureQuote setTrigger={ props.setTrigger } account={ props.account } data={ datastorage } setData={ setDatastorage }/> : <InsureForm setTrigger={ trigger } setData={ setDatastorage } />;
}

function InsureForm(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{color: props.color}}>Insure</h1>
                <p>Period</p> 
                    <select id="period">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                &nbsp;Year(s)
                <p>Estimated Monthly Inflow</p> <input id="emi" placeholder="0.5" type={ "number" } style={{ width: "147px", height: "20px" }}></input> ETH
                <p>Estimated Maximum Amount</p> <input id="ema" placeholder="1" type={ "number" } style={{ width: "147px", height: "20px" }}></input> ETH
                <p>Secret Phrase</p> <input id="sf" type={ "password" } style={{height: "20px"}}></input>
                <div style={{ height: "30px" }}></div>
            </form>
            <Button onClick={ () => {
                props.setTrigger(true);
                var emi = document.getElementById('emi').value === "" ? 0.5 : parseFloat(document.getElementById('emi').value);
                var ema = document.getElementById('ema').value === "" ? 1 : parseFloat(document.getElementById('ema').value);
                var period = parseFloat(document.getElementById('period').value);
                var sf = document.getElementById('sf').value;
                var quote = getQuote(period, ema, emi);
                props.setData([emi, ema, period, sf, quote]);
            }}>Get Quote</Button>
        </div>
    );
}

function InsureQuote(props)
{
    return (
        <div style={{ textAlign: "center" }}>
            <p style={{fontSize: "40px"}}>Your Quote is { props.data[4] } ETH!</p>
            <Button onClick={ async() => {
                var Contract = require('web3-eth-contract');
                const provider = await detectEthereumProvider();
                const web3 = new Web3(provider);
            
                var emi = props.data[0];
                var ema = props.data[1];
                var period = props.data[2];
                var sf = props.data[3];
                var quote = props.data[4];
                var quoteWei = Web3.utils.toWei(String(quote));
                console.log(quoteWei);

                var contract = new Contract(abi['abi'], contractAddress);
                contract.setProvider(web3.currentProvider);
                var status = 1;
                var tx = await contract.methods.fund(quoteWei).send({
                    from: props.account,
                    value: quoteWei
                }).catch((err) => status = 0);

                // if rejected: abandon
                if (status === 0) 
                {
                    alert("Transaction rejected!");
                    return;
                }
                addTransaction(props.account, quote);
                purchaseInsurance(props.account, period, ema, emi, sf, quote);
                alert("Success!");
                props.setData(null);
                props.setTrigger(false);
            }}>Insure Now</Button>
        </div>
    );
}

export default Insure;