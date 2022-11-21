import React from "react";
import ClassComponent from "./Class-Component";
import NameForm from "./Controlled-Form";
import CounterApp from "./EventHandling";
import Counter from "./State-Component";

function Stateful() {
  return (
    <div>
      <h2>Stateful Component</h2>
      <ClassComponent name="Satrio" />
      <Counter />
      <CounterApp />
      <NameForm />
    </div>
  );
}

export default Stateful;
