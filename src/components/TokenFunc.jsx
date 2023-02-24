import React from "react";

import rock from "../static/images/icon-rock.svg";
import paper from "../static/images/icon-paper.svg";
import scissors from "../static/images/icon-scissors.svg";

const TokenFunc = ({ tokenOption }) => {

  let imgTokenOption = ''

  switch(tokenOption) {
    case "rock":
        imgTokenOption = rock;
      break;
    case 'paper':
        imgTokenOption = paper;
      break;
    case "scissors":
        imgTokenOption = scissors;
      break;
    default:
  }

  return (
    <div
      className={`Board-item option-${tokenOption}`}
    >
      <div className={`item-container ${tokenOption}`}>
        <img src={imgTokenOption} alt={`${tokenOption}`} />
      </div>
    </div>
  );
};

export default TokenFunc;