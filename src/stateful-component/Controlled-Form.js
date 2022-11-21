import React from "react";

// Controlled Component merupakan component yang me-render form, tetapi “single source of truth” atau sumber datanya diambil dari component state, bukan DOM.

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  //   handler guna mengubah nilai state
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  render() {
    return (
      <form>
        <h1>Form</h1>
        <input
          type="text"
          value={this.state.email}
          // fungsi handler akan dipanggil karena ada property onChange
          onChange={this.onEmailChangeHandler}
        />
      </form>
    );
  }
}

export default NameForm;
