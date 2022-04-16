import React from "react";
import Insure from "./PopupContent/Insure";
import Claim from "./PopupContent/Claim"
import Ticket from "./PopupContent/Ticket"
import Details from "./PopupContent/Details"
import Info from "./PopupContent/Info"
import ChangeData from "./PopupContent/ChangeData";


const Popup = props => {
  var content;
  // 0 -> claim
  // 1 -> ticket
  // 2 -> info
  // 3 -> details
  // 4 -> insure
  switch (props.popupState)
  {
    case 0: content = <Claim color={props.color} account={props.account} setTrigger={props.setTrigger}/>; break;
    case 1: content = <Ticket color={props.color} setTrigger={props.setTrigger}/>; break;
    case 2: content = <Info color={props.color}/>; break;
    case 3: content = <Details color={props.color} account={props.account}/>; break;
    case 4: content = <Insure color={props.color} setTrigger={props.setTrigger} account={props.account}/>; break;
    case 5: content = <ChangeData color={props.color} setTrigger={props.setTrigger} account={props.account}/>; break;
  }

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div onClick={ () => props.setTrigger(false)} style={{ cursor: "pointer", marginTop: "-40px" }}>
          <p style={{ fontSize: "30px", color: props.color } }>X</p>
        </div>
        { content }
        <div style={{ height: "80px" }}></div>
      </div>
    </div>
  ) : "";
};


export default Popup;