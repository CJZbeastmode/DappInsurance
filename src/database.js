import GUN from 'gun';
import 'gun/axe'; 
export const db = GUN();



// Insurance
function purchaseInsurance(_walletAddress, _period, _estimatedMaxAmount, _estimatedMonthlyInflow, _secretPhrase, _quote)
{
    db.get('insurance').get(_walletAddress).put({dueDate: getTodayAddPeriod(_period), period: _period, estimatedMaxAmount: _estimatedMaxAmount, estimatedMonthlyInflow: _estimatedMonthlyInflow, secretPhrase: _secretPhrase, fee: _quote});
}

function getDetails(_walletAddress)
{
    var data = new Map();
	db.get('insurance').get(_walletAddress).map().once((value, key) => {
		data.set(key, value);
	});
	return data;
}

function changeData(_walletAddress, _estimatedMaxAmount, _estimatedMonthlyInflow)
{
	const details = getDetails(_walletAddress);
	db.get('insurance').get(_walletAddress).put({dueDate: details.get('dueDate'), period: details.get('period'), estimatedMaxAmount: _estimatedMaxAmount, estimatedMonthlyInflow: _estimatedMonthlyInflow, secretPhrase: details.get('secretPhrase'), fee: details.get('fee')});
}



// Transactions
function addTransaction(_walletAddress, _amount)
{
	db.get('transactions').get(_walletAddress).set({amount: _amount, date: getToday()});
}

function withdraw(_walletAddress, _amount)
{
	db.get('transactions').get(_walletAddress).set({amount: -_amount, date: getToday()});
}



// Claims
function appendClaim(_walletAccount, _email, _reason, _description)
{    
    var pass = false;
    var idSet = [];
    db.get('claimIdList').map().once(a => idSet.push(a));
    var uniqueIdSet = idSet.filter(onlyUnique);
    
    while (!pass)
    {
        var id = genId(); 
        if (uniqueIdSet.includes(id)) pass = false; 
        else pass = true;
    }
 
    db.get('claims').get(id).put({account: _walletAccount, email: _email, reason: _reason, description: _description});
    db.get('claimIdList').set(id);
    console.log(id);
}

function deleteClaim(_claimId)
{
    /* According to Gun DB API this should work but it does not. */
    // db.get('claimIdList').unset(_claimId);
	db.get('claims').get(_claimId).put(null);
}

function getClaim()
{
    var idSet = [];
    db.get('claimIdList').map().once(a => idSet.push(a));
    var uniqueIdSet = idSet.filter(onlyUnique);
    var data = [];
    uniqueIdSet.forEach(ele => data.push([ele, getSingleClaim(ele)]));
	return data;
}

function getSingleClaim(_claimId)
{
    var data = new Map();
	db.get('claims').get(_claimId).map().once((value, key) => {
		data.set(key, value);
	});
	return data; 
}



// Tickets
function appendTicket(_email, _title, _category, _description)
{
    var pass = false;
    var idSet = [];
    db.get('ticketIdList').map().once(a => idSet.push(a));
    var uniqueIdSet = idSet.filter(onlyUnique);

    while (!pass)
    {
        var id = genId(); 
        if (uniqueIdSet.includes(id)) pass = false; 
        else pass = true;
    } 

    db.get('tickets').get(id).put({email: _email, title: _title, category: _category, desciption: _description});        
    db.get('ticketIdList').set(id);
}

function deleteTicket(_ticketId)
{
    /* According to Gun DB API this should work but it does not. */
    // db.get('claimIdList').unset(_claimId);
	db.get('tickets').get(_ticketId).put(null);
}

function getTicket()
{
    var idSet = [];
    db.get('ticketIdList').map().once(a => idSet.push(a));
    var uniqueIdSet = idSet.filter(onlyUnique);
    var data = [];
    uniqueIdSet.forEach(ele => data.push([ele, getSingleTicket(ele)]));
	return data;
}

function getSingleTicket(_ticketId)
{
    var data = new Map();
	db.get('tickets').get(_ticketId).map().once((value, key) => {
		data.set(key, value);
	});
	return data; 
}



// Helpers
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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

function genId()
{
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function removeArrayItem(array, item) {
    var i = array.length;

    while (i--) {
        if (array[i] === item) {
            array.splice(array.indexOf(item), 1);
        }
    }
}



export { purchaseInsurance, getDetails, changeData, addTransaction, withdraw, appendClaim, deleteClaim, getClaim, appendTicket, deleteTicket, getTicket };