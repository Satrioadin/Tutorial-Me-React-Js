import React from "react";
import PropsTypes from "prop-types";

export const PropsTypesOneOf = ({ mode }) => {
  return (
    <div>
      <p>Its Screen Mode : {mode}</p>
    </div>
  );
};

PropsTypesOneOf.propTypes = {
  mode: PropsTypes.oneOf(["Light, Dark"]),
};
