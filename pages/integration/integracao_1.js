import { useState } from "react";
import Link from "../../src/components/Link";
import Layout from "../../src/Layout";

function Integration() {

   const [codigo, setCodigo] = useState(1);
   const [cliente, setCliente] = useState({});

   async function obterCliente() {
      // fetch(`http://localhost:3000/api/clientes/${codigo}`)
      //    .then(resp => resp.json())
      //    .then(data => setCliente(data))

      const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
      const dados = await resp.json()
      setCliente(dados);
   }

   return (
      <Layout title="Integracao com BACKEND">
         <div>
            <input type='number'
               value={codigo}
               onChange={(e) => setCodigo(e.target.value)}
            />
            <button onClick={obterCliente}>Obter Cliente</button>
         </div>
         <ul>
            <li>ID: {cliente.id}</li>
            <li>Nome: {cliente.nome}</li>
            <li>Email: {cliente.email}</li>
         </ul>

         <Link href="/">Voltar para a Home</Link>
      </Layout>
   )
}
export default Integration;