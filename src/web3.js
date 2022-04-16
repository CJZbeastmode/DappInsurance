import { contractAddress, abi } from "./build/abi";
import detectEthereumProvider from '@metamask/detect-provider';

var Web3 = require('web3')
var Contract = require('web3-eth-contract');

async function sendTransaction(amount, account)
{
    const provider = await detectEthereumProvider();
    const web3 = new Web3(provider);
    var contract = new Contract(abi['abi'], contractAddress);
    contract.setProvider(web3.currentProvider);
    var status = 1;
    var tx = await contract.methods.fund(amount).send({
        from: account,
        value: amount
    }).catch((err) => status = 0);
    return status;
}

async function payout(account, address, amount)
{
    const provider = await detectEthereumProvider();
    const web3 = new Web3(provider);
    //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //const account = accounts[0];
    var contract = new Contract(abi['abi'], contractAddress);
    contract.setProvider(web3.currentProvider);
    contract.methods.withdraw(address, amount).send({
        from: contractAddress,
        value: amount
    });
}

export default sendTransaction;


