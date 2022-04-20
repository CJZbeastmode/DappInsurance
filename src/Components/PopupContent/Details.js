import { getDetails } from '../../database';

function Details(props) {
    const data = getDetails(props.account);

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color: props.color}}>Details</h1>
            <p style={{color: props.color}}>Wallet Address</p> <p>{ props.account }</p>
            <p style={{color: props.color}}>Due Time</p> <p>{data.get('dueDate').substring(0, 4)}.{data.get('dueDate').substring(4, 6)}.{data.get('dueDate').substring(6, 8)}</p>
            <p style={{color: props.color}}>Estimated Monthly Inflow</p><p>{data.get('estimatedMonthlyInflow')} ETH</p>
            <p style={{color: props.color}}>Estimated Maximum Amount</p><p>{data.get('estimatedMaxAmount')} ETH</p>
        </div>
    );
}

export default Details;