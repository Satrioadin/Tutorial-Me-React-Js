import React from "react";

// terdapat 2 contoh menggunakan event handling
// satu
// {
//   /* <button onclick="increaseValue()">Increase Value</button>; */
// }

// dua
// {
//   /* <button onClick={increaseValue}>Increase Value</button>; */
// }

// Ketika menggunakan React, Anda juga tidak perlu lagi menggunakan perintah addEventListener() untuk menetapkan event setelah element ditampilkan pada DOM. Cukup sediakan event handler pada React element secara langsung melalui properti.

// Props Drilling Event Handler
// Data atau state sebaiknya berada di parent component dan hanya boleh diubah oleh komponen itu sendiri sehingga fungsi handler--yang notabene akan mengubah state--haruslah berada di parent component.
// State count hidup di dalam component CounterApp yang merupakan parent component dari seluruh komponen yang ditampilkan. Karena CounterApp pemilik data, maka ia-lah yang berhak memperbarui datanya melalui fungsi onIncreaseEventHandler yang dimilikinya.

// contoh Event handling dan component state
// inisialisasi state component
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0,
    };

    // binding event handler agar selalu bernilai CounterApp Bukan window
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  // menaikan nilai
  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  // mereset nilai menjadi 0
  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    // menampilkan data count
    function CounterDisplay({ count }) {
      if (count === 0) {
        return <p>{count}</p>;
      }
      if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
      }
      if (count % 5 === 0) {
        return <p>Fizz</p>;
      }
      if (count % 7 === 0) {
        return <p>Buzz</p>;
      }

      return <p>{count}</p>;
    }

    // button peningkatan nilai
    function IncreaseButton({ increase }) {
      return (
        <div>
          <button onClick={increase}>+ increase</button>
        </div>
      );
    }

    // button mereset nilai
    function ResetButton({ reset }) {
      return (
        <div>
          <button onClick={reset}>- reset</button>
        </div>
      );
    }
    return (
      <div>
        <h2>Event handling dan component state</h2>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default CounterApp;
