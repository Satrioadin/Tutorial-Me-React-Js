import React from "react";

// React component memiliki cara kerja yang sama seperti counter dalam mengelola data. Di dalam React component, kita bisa menyimpan sebuah data yang bila berubah bisa memicu perubahan pada tampilan UI. Syaratnya, data tersebut perlu disimpan pada tempat khusus dinamakan state.

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi data dalam state
    this.state = {
      count: 0,
    };

    // reset the count value berupa object
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });

    // reset the count value Berupa object
    // this.setState({
    //   count: 0,
    // });
  }

  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <h2>State Component</h2>
        <p>StateCount: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
