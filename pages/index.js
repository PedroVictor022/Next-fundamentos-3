import React from "react";
import HeaderC from "../src/components/header";
import Link from "../src/components/Link";
import Layout from "../src/Layout";
import navbar from "../styles/navbar.module.css"

export default function Home() {

  const soma = 1 + 1

  return (
    <div>
      <HeaderC title="Fundamentos do Next.JS"/>

      <div className={navbar.nav}>
        <Link href="/teste1">Pagina de Testes</Link>
        <Link href="/sobre-next">Sobre o Next</Link>
        <Link href="/documentacao">Docs</Link>
        <Link href="/perfil">Perfil</Link>
      </div>

      <Layout>
        
      </Layout>
      
      <h2>Integração com Javascript</h2>
      <p>Resultado da soma = {soma}</p>
    </div>
  )
}
