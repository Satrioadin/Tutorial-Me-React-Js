import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Kamu Mengklik ${count} kali`;
  });

  return (
    <div>
      <h2>useEffect</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
}

export default UseEffect;
