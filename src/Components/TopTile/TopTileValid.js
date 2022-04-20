import { getDetails } from "../../database";
import { useState } from "react";
import Button from "../Button";

function TopTileValid(props)
{
    const [refresh, setRefresh] = useState(0);
    setTimeout(() => { setRefresh(1); }, 1000);

    const details = getDetails(props.account);
    const exists = details.size !== 0;

    var loading = (
      <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>
        <p style={{ fontSize: "45px" }}>Loading...</p>
      </div>
    );
    var notLoading = (
    <div style={{ backgroundColor: "white", width: "80%", textAlign: "center", borderRadius: "40px" }}>      
    { exists ? (<p style={{ fontSize: "45px" }}>Your wallet is insured until {details.get('dueDate').substring(0, 4)}.{details.get('dueDate').substring(4, 6)}.{details.get('dueDate').substring(6, 8)}!</p>)
      : (<p style={{ fontSize: "45px" }}>Your wallet hasn't yet been insured!</p>)
    }
    <div style={{ height: "30px" }}></div>
    { exists ?  <div>
        <Button style={{ marginRight: "10px" }} onClick={ () => { props.setPopUp(3); props.setTrigger(true); } }>Details</Button>
        <Button style={{ marginLeft: "10px" }} onClick={ () => { props.setPopUp(5); props.setTrigger(true);} }>Change Data</Button>
      </div> :  <div>
        <Button style={{ marginRight: "10px" }} onClick={ () => { props.setPopUp(4); props.setTrigger(true); } }>Insure Now</Button>
      <Button style={{ marginLeft: "10px" }} onClick={ () => { props.setPopUp(2); props.setTrigger(true);} }>More Info</Button>
      </div>

    }
     
    <div style={{ height: "30px" }}></div>
  </div>);

    return refresh === 0 ? loading : notLoading;
}

export default TopTileValid;