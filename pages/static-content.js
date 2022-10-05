// Esta funcao, vai ser retornada como props para a funcao `Estatico`
export function getStaticProps() {
   return {
      props: {
         numero: Math.random()
      }
   }
}

// Se caso colocar-mos Math diretamente no componente, um erro vai ocorrer por conta de SSR (?? -- Pesquisar mais sobre o assunto -- ??)

function Estatico(props) {
   return(
      <div>
         <p>Numero aleatorio: {props.numero}</p>
      </div>
   )
}
export default Estatico;