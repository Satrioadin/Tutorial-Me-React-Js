import React from "react";
import Jsx from "./Jsx-Content";
import InstagramProfile from "./Component-Properties";
import FilterableProductTable from "./Compositional-Component";

function UiComponents() {
  return (
    <div className="Uicomponent">
      <header className="Uicomponent-header">
        <h2>JSX-Tutorial</h2>
        <p>Membangun UI Sederhana Dengan metode JSX</p>
      </header>
      <Jsx />
      <InstagramProfile />
      <FilterableProductTable />
    </div>
  );
}

export default UiComponents;
