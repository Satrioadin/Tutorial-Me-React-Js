import React from "react";

// lass component sejatinya adalah class, kita dapat memanfaatkan constructor untuk menginisialisasi data--contohnya state--atau menuliskan kode yang akan dipanggil setiap kali pembuatan component.

// sintaks class mewarisi (extends)
// seluruh class yang mewarisi React.Component wajib memiliki fungsi render untuk mengembalikan UI
class ClassComponent extends React.Component {
  // Ketika Anda memanfaatkan constructor, pastikan selalu memanggil base constructor (super) dan berikan nilai props
  constructor(props) {
    super(props);
    console.log("component created!");
  }

  render() {
    //    di class component Anda bisa mengakses nilai properti melalui this.props. Karena this pada class component bernilai instance dari component itu sendiri,
    return <p>Hello, {this.props.name}!</p>;
  }
}

export default ClassComponent;
