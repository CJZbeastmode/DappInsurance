import Button from "../Button";
import { getDetails, changeData, addTransaction } from "../../database";
import getQuote from "../../getQuote";
import Web3 from "web3";
import { contractAddress, abi } from "../../build/abi";
import detectEthereumProvider from "@metamask/detect-provider";

function ChangeData(props)
{
    const data = getDetails(props.account);

    return (
        <div style={{ textAlign: "center" }}>
            <form style={{ textAlign: "center" }}>
                <h1 style={{ color: props.color }}>Change Data</h1>
                <p>Estimated Monthly Inflow</p> <input id="emi" type={ "number" } style={{ width: "147px", height: "20px" }} defaultValue={ data.get('estimatedMonthlyInflow') }></input> ETH
                <p>Estimated Maximum Amount</p> <input id="ema" type={ "number" } style={{ width: "147px", height: "20px" }} defaultValue={ data.get('estimatedMaxAmount') }></input> ETH
                <div style={{ height: "30px" }}></div>
            </form>
            <Button onClick={ async() => {
                var Contract = require('web3-eth-contract');
                const provider = await detectEthereumProvider();
                const web3 = new Web3(provider);

                var ema = document.getElementById('ema').value === "" ? data.get('estimatedMaxAmount') : parseFloat(document.getElementById('ema').value);
                var emi = document.getElementById('emi').value === "" ? data.get('estimateMonthlyInflow') : parseFloat(document.getElementById('emi').value);
                var quote = getQuote(data.get('period'), ema, emi);
                var quoteWei = Web3.utils.toWei(String(quote));
                if (quote > data.get('fee'))
                {
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
                    addTransaction(props.account, quote - data.get('fee'));
                }
                changeData(props.account, ema, emi);
                alert("Success!");
                props.setTrigger(false);
            }}>Confirm</Button>
        </div>
        
    );
}

export default ChangeData;