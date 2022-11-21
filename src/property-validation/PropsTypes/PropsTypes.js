/* eslint-disable jsx-a11y/heading-has-content */

// Menggunakan Props types memasang terlebih dahulu packagenya dg printah `npm install prop-types`

import React, { Component } from "react";
import PropsTypes from "prop-types";

export default class PropsTypesTipe extends Component {
  render() {
    //   menetapkan props types agar meminimalisir kesalahan tipe data yang di terima dari props
    const { name } = this.props;
    const { count } = this.props;
    const { isDark } = this.props;

    return (
      <div>
        <p>Hello, {name}</p>
        <p>Antrean ke-{count}</p>
        <p>Lamp is {isDark ? "On" : "Off"}</p>
      </div>
    );
  }
}

PropsTypesTipe.propTypes = {
  //Catatan: Secara default, setiap props bersifat opsional untuk diberikan nilai. Agar dibuat wajib, tambahkan .isRequired setelah menentukan tipe data.

  // PropsTypes String
  name: PropsTypes.string.isRequired,
  // PropsTypes Integer atau Number
  count: PropsTypes.number,
  //   PropsTypes Bool
  isDark: PropsTypes.bool,
};
