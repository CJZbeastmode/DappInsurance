import GUN from 'gun';
import 'gun/axe'; 

export const db = GUN();
var claimId = 0;
var ticketId = 0;

function main() 
{ 
	/*
    db.get('insurance').get('0x1').put({amount: 100, eee: 0.03});
	db.get('insurance').get('0x2').put({amount: 200, eee: 0.04});
	db.get('insurance').get('0x2').put({amount: 300, eee: 0.04});
	db.get('insurance').get('0x2').map().once((a) => {
		console.log(a);
	});
	*/
	//purchaseInsurance(0x123, 2, 1, 0.03, "hello");
	//console.log(getDetails(0x123));
	db.get('insurance').get('0x3221A67F25507812A16664f191F030b247d17773').map().once((a) => {
		console.log(a);
	});	
}

function purchaseInsurance(_walletAddress, _period, _estimatedMaxAmount, _estimatedMonthlyInflow, _secretPhrase, _quote)
{
    db.get('insurance').get(_walletAddress).put({dueDate: getTodayAddPeriod(_period), period: _period, estimatedMaxAmount: _estimatedMaxAmount, estimatedMonthlyInflow: _estimatedMonthlyInflow, secretPhrase: _secretPhrase, fee: _quote});
}

function addTransaction(_walletAddress, _amount)
{
	db.get('transactions').get(_walletAddress).set({amount: _amount, date: getToday()});
}

function withdraw(_walletAddress, _amount)
{
	db.get('transactions').get(_walletAddress).set({amount: -_amount, date: getToday()});
}

function getDetails(_walletAddress)
{
	// dueDate, period, inflow, max, secretphrase, quote
	var data = [];
	db.get('insurance').get(_walletAddress).map().once((value) => {
		data.push(value);
	})
	return data;
}

function changeData(_walletAddress, _estimatedMaxAmount, _estimatedMonthlyInflow)
{
	const details = getDetails(_walletAddress);
	console.log(details);
	db.get('insurance').get(_walletAddress).put({dueDate: details[0], period: details[1], estimatedMaxAmount: _estimatedMaxAmount, estimatedMonthlyInflow: _estimatedMonthlyInflow, secretPhrase: details[4], fee: details[5]});
}

function getToday()
{
	var a = new Date();
	var ret = '';
	ret = ret + a.getFullYear() + (a.getMonth() < 10 ? '0' + a.getMonth() : a.getMonth()) + (a.getDate() < 10 ? '0' + a.getDate() : a.getDate());
	return ret;
}

function getTodayAddPeriod(n)
{
	var a = new Date();
	var ret = '';
	ret = ret + (a.getFullYear() + n) + (a.getMonth() < 10 ? '0' + a.getMonth() : a.getMonth()) + (a.getDate() < 10 ? '0' + a.getDate() : a.getDate());
	return ret;
}

function appendClaim(_walletAccount, _email, _reason, _description)
{
	//var a = db.get('claim').get(claimId++).put({account: _walletAccount, email: _email, reason: _reason, description: _description});
	var a = db.get('claim').set({account: _walletAccount, email: _email, reason: _reason, description: _description});
	console.log(a);
}

function deleteClaim(_claimId)
{
	db.get('claim').get(claimId).put(null);
}

function appendTicket(_email, _title, _category, _description)
{
	db.get('ticket').get(ticketId++).put({email: _email, title: _title, category: _category, desciption: _description});
}

function deleteTicket(_ticketId)
{
	db.get('ticket').get(_ticketId).put(null);
}

function getClaim()
{
	var claims = [];
	return claims;
}


export { purchaseInsurance, addTransaction, withdraw, getDetails, changeData, getToday, getTodayAddPeriod, appendClaim, deleteClaim, appendTicket, deleteTicket, getClaim };

