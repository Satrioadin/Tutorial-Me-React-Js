import React from "react";
import PropsTypes from "prop-types";

export const PropsTypesArray = ({ data, dataOf }) => {
  return (
    <div>
      {data.map((item) => (
        <li key={item}> {item}</li>
      ))}
      <hr />
      {dataOf.map((item) => (
        <li key={item}> {item}</li>
      ))}
    </div>
  );
};

PropsTypesArray.propTypes = {
  data: PropsTypes.array,
  dataOf: PropsTypes.arrayOf(PropsTypes.string),
};
