import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isUpdate: false,
    };
  }

  componentDidMount() {
    // get API
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          name: json.name,
        })
      );
  }

  handleSubmite = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: this.state.name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          isUpdate: true,
        })
      );
  };

  componentDidUpdate() {
    const { isUpdate } = this.state;
    if (isUpdate) {
      alert("Nama Berhasil di Update");
      this.setState({
        isUpdate: false,
      });
    }
  }

  // componentWillUnmount() {
  //   console.log("Component Dicopot");
  // }

  render() {
    return (
      <div>
        <h3>Name : {this.state.name}</h3>
        <hr />
        <h3>Update Name</h3>
        <form onSubmit={(event) => this.handleSubmite(event)}>
          <input
            type="text"
            placeholder="Change Name"
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
