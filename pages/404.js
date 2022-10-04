import Link from "../src/components/Link";

function NotFoundPage() {
   return (
      <div>
         <h1>Pagina não encontrada</h1>
         <Link href='/' colorItem={`crimson`}>Voltar para a Home</Link>
      </div>
   )
}

export default NotFoundPage;