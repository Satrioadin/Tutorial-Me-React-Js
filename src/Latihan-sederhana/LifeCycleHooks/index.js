import React, { useEffect, useState } from "react";

function LifeCycleHooks() {
  const [name, setName] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setName(json.name));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setUpdate(true));
  };

  // ComponentDidUpdate
  useEffect(() => {
    if (isUpdate) {
      alert(`Nama Berhasil di Update`);
      setUpdate(false);
    }
  }, [isUpdate]);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component di Copot");
    };
  }, []);

  return (
    <div>
      <h2>Name: {name}</h2>
      <hr />
      <h3>Update Name</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Change Name"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LifeCycleHooks;
