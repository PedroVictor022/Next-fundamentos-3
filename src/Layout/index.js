import Link from '../components/Link'
import LayoutStyle from '../../styles/Layout.module.css'

function Layout(props) {
   console.log(props)
   return (
      <div className={LayoutStyle.layout}>
         <div className={LayoutStyle.header}>
            <h1>Sobre o componente Layout</h1>
            <Link href="/">Voltar</Link>
         </div>
         <div className={LayoutStyle.content}>
            {props.children}
         </div>
      </div>
   )
}

export default Layout