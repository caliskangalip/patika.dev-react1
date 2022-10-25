import React from 'react'

const name= "Galip";
const surName="ÇALIŞKAN";
const isLoggedIn=true;

function Header() {
  return (
    <div>
        <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surName}`}</h1>
        {!isLoggedIn && "Giriş yapmadınız"}
        <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surName}` : "Giriş yapmadınız !"}</h1>
    </div>
  )
}

export default Header