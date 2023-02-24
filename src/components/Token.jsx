import React from "react";

import rock from "../static/images/icon-rock.svg";
import paper from "../static/images/icon-paper.svg";
import scissors from "../static/images/icon-scissors.svg";

const Token = ({handleClick, token}) => {

    function handleInnerClick(option) {
        if (handleClick !== undefined) {
        handleClick(option);
        } else {
        return;
        }
    }

    let tokenSelected = ''

    switch(token) {
        case "rock":
            tokenSelected = rock;
          break;
        case 'paper':
            tokenSelected = paper;
          break;
        case "scissors":
            tokenSelected = scissors;
          break;
        default:
      }

  return (
    <div
    onClick={() => handleInnerClick(token)}
      className={`Board-item token option-${token}`}
    >
      <div className={`item-container ${token}`}>
        <img src={tokenSelected} alt={`${tokenSelected}`} />
      </div>
    </div>
  );
};

export default Token;
