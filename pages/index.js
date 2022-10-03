import React from "react";
import HeaderC from "../src/components/header";

export default function Home() {

  const soma = 1 + 1

  return (
    <div>
      <HeaderC />
      
      <h2>Integração com Javascript</h2>
      <p>Resultado da soma = {soma}</p>
    </div>
  )
}
