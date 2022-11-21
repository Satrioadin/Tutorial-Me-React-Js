import React from "react";
import PropsTypesTipe from "./PropsTypes/PropsTypes";
import { PropsTypesFunc } from "./PropsTypes/PropsTypesFunc";
import { PropsTypesArray } from "./PropsTypes/PropsTypesArray";
import PropsTypesObject from "./PropsTypes/PropsTypesObject";
import { PropsTypesOneOf } from "./PropsTypes/PropsTypesOneOf";

const PropertyValidation = () => {
  return (
    <div>
      <h4>PropsType</h4>
      <PropsTypesTipe name={"satrio"} count={1} isDark={1 === 1} />
      <hr />
      <h4>PropsType.array & arrayOf</h4>
      <PropsTypesArray
        //   array
        data={["apel", "nanas", 1, true]}
        //   arrayOf
        dataOf={["anggur", "nanas", "apel"]}
      />
      <hr />
      <h4>PropsType.object & objectOf</h4>
      <PropsTypesObject
        //   object
        data={{ name: "Satrio", city: "tangsel", since: "2022" }}
        // objectOf
        dataOf={{ cukis: 1, dodi: 2, betit: 3 }}
      />
      <hr />
      <h4>PropsTypes.func</h4>
      <PropsTypesFunc addOn={() => alert("Teman Ditamahkan")} />
      <hr />
      <h4>PropsTypes.oneOf</h4>
      <PropsTypesOneOf mode={"light"} />
    </div>
  );
};

export default PropertyValidation;
