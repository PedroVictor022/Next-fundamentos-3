import router, { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "../../src/components/Link";
import Layout from "../../src/Layout";

function ClienteID() {
   const routerFn = useRouter();

   // useEffect(() => {
   //    console.log(router.query.codigo)
   //    console.log(routerFn)
   // }, [])

   return (
      <Layout title="Teste de Pagina dinamicas">
         <span>Codigo do cliente: {routerFn.query.codigo}</span>
         <Link href="/">Voltar para a Home</Link>
      </Layout>
   )
}

export default ClienteID;