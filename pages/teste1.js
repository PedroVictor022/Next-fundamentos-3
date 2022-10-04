import Link from "../src/components/Link";
import StyleCustom from "../styles/teste1.module.css"

function TestePage() {
   return (
      <div className={StyleCustom.main}>
         <h1>Testando pagina</h1>
         <Link href='/'>Voltar para a Home</Link>
      </div>
   )
}
export default TestePage;