import React from "react";
import DicodingLogo from "../image/dicoding-logo.png";

function Jsx() {
  return (
    <div>
      <h1>Biodata Perusahaan</h1>
      <ul>
        <li>Nama: Satrio Foundation</li>
        <li>Bidang: Education</li>
        <li>Tagline: Decode Ideas, Discover Potential.</li>

        {/* memanggil Fersi Folder Public */}
        {/* <img src="dicoding-logo.png" alt="Dicoding Logo" /> */}

        {/* memanggil Fersi Folder src dengan mengimport terlebih dahulu seperti di paling atas */}
        <img src={DicodingLogo} alt="Dicoding Logo" />
      </ul>
    </div>
  );
}

export default Jsx;
