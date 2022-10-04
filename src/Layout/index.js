import LayoutStyle from '../../styles/Layout.module.css'

function Layout(props) {
   console.log(props)
   return (
      <div className={LayoutStyle.layout}>
         {<h2>{props.title}</h2> ?? null}
         <div className={LayoutStyle.content}>
            {props.children}
         </div>
      </div>
   )
}

export default Layout