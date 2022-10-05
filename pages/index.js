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
        <Link href="/teste1" colorItem={`red`}>Pagina de Testes</Link>
        <Link href="/sobre-next" colorItem={`green`}>Sobre o Next</Link>
        {/* Como o item abaixo esta dentro de uma pasta, para acessar, temos que entrar na pasta tambem - o nome apos a barra e o endereco do conteudo*/}
        <Link href="/cliente/cliente29023" colorItem={`violet`}>Acessar cliente 2</Link>
        <Link href="/integration/integracao_1" colorItem={`yellow`}>Integração</Link>
      </div>

      <Layout>
        <h1>Testando Layout</h1>
        <p>Componente para toda a aplicacao</p>
      </Layout>
      
      <h2>Integração com Javascript</h2>
      <p>Resultado da soma = {soma}</p>
    </div>
  )
}