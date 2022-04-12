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
    case 0: content = <Claim color={props.color}/>; break;
    case 1: content = <Ticket color={props.color}/>; break;
    case 2: content = <Info color={props.color}/>; break;
    case 3: content = <Details color={props.color}/>; break;
    case 4: content = <Insure color={props.color}/>; break;
    case 5: content = <ChangeData color={props.color}/>; break;
  }

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        { content }
        <button onClick={ () => props.setTrigger(false) }>Close</button>
      </div>
    </div>
  ) : "";
};


export default Popup;