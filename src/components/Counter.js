import React from "react";
import { connect } from "react-redux";
// import { connect, bindActionCreators } from "react-redux";
import * as actions from "../actions";

import Value from "./Value";
import Control from "./Control";

function Counter({
  number,
  color,
  handleIncrement,
  handleDecrement,
  handlSetColor,
}) {
  const style = {
    background: `rgb(${color[0]},${color[1]},${color[2]})`,
  };

  function setRandomColor() {
    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];
    handlSetColor(color);
  }

  return (
    <div style={style}>
      <Value number={number} />
      <Control
        onPlus={handleIncrement}
        onSubtract={handleDecrement}
        onRandomizeColor={setRandomColor}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions, dispatch);
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handlSetColor: (color) => {
      dispatch(actions.setColor(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
