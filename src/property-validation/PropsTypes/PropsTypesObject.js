import React from "react";
import PropsTypes from "prop-types";

const PropsTypesObject = ({ data, dataOf }) => {
  const { name, city, since } = data;
  const { cukis, dodi, betit } = dataOf;
  return (
    <div>
      <div>
        <p>Nama: {name}</p>
        <p>kota: {city}</p>
        <p>Sejak: {since}</p>
      </div>
      <hr />
      <div>
        <p>Score Cukis {cukis}</p>
        <p>Score Dodi {dodi}</p>
        <p>Score Betit {betit}</p>
      </div>
    </div>
  );
};

PropsTypesObject.propTypes = {
  data: PropsTypes.object,
  dataOf: PropsTypes.objectOf(PropsTypes.number),
};

export default PropsTypesObject;
