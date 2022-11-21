import React from "react";
import PropsTypes from "prop-types";

export const PropsTypesFunc = () => {
  let addFriendButton = ({ addOn }) => {
    return addOn;
  };

  return (
    <div>
      <button type="button">Klike ME</button>
    </div>
  );
};

PropsTypesFunc.propTypes = {
  addOn: PropsTypes.func,
};
