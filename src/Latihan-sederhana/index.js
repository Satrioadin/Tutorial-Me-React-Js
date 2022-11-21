import React, { useState } from "react";
// import LifeCycleHooks from "./LifeCycleHooks";
// import LifeCycle from "./LifeCycle";
import SpaNoRouter from "./SpaNoRouter";

function LatihanSederhana() {
  // const [isHide, setHide] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      {/* <h1>LifeCycle Dengan Class (API)</h1>
      <hr />
      <button onClick={() => setHide(!isHide)}>
        {isHide ? "Tampilkan" : "Sembunyikan"}
      </button>
      {!isHide && <LifeCycle />} */}

      {/* <h1>Life Cycle Dengan Hooks</h1>
      <hr />
      <button onClick={() => setHide(!isHide)}>
        {isHide ? "Tampilkan" : "Sembunyikan"}
      </button>
      {!isHide && <LifeCycleHooks />} */}

      <h1>Single Page App No Router</h1>
      <SpaNoRouter />
    </div>
  );
}

export default LatihanSederhana;
