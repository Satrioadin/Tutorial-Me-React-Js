import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const counterDisplay = ({ count }) => {
    if (count % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  };

  return (
    <div>
      <h2>useState</h2>
      <p>
        Klik Sebanual {count} Kali, dan angka termasuk{" "}
        {counterDisplay({ count })}
      </p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </div>
  );
}

export default UseState;
