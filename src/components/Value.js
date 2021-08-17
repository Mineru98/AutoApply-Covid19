import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  number: PropTypes.number,
};

const defaultProps = {
  number: -1,
};

function Value({ number }) {
  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
