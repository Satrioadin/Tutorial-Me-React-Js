import React from "react";

function InstagramComponent(props) {
  const profile = props.profile;

  const name = props.name;
  const username = props.username;
  const bio = props.bio;
  const isVerified = props.isVerified;

  /* 
        melalui props kita dapat mengirimkan data ketika menggunakanya. ini lah yang membuat component sangat reausable hanya karna satu component berserta properti yang terdefinisi
    */
  return (
    <div className="container">
      <h1>Component Properties </h1>
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verifed: </dt>
        <dd>{isVerified ? "yes" : "no"}</dd>
      </dl>
    </div>
  );
}

function InstagramProfile() {
  return (
    <InstagramComponent
      name="Dicoding Indonesia"
      username="dicoding"
      bio="Bangun Karirmu Sebagai Developer Profesional"
      isVerified
    />
  );
}

// Children
// untuk menggunakan properti children, cara pemanggilan component pun harus menggunakan tag pembuka dan penutup. seperti contoh di bawah
// function SayHello({ children }) {
//   return <p>Hello, {children}!</p>;
// }

// <SayHello>Dicoding</SayHello>; // Hello, Dicoding!

export default InstagramProfile;
