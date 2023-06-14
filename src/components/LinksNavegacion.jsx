import { Link as LinkRouter } from "react-router-dom"

function LinksNavegacion(params) {
  const enlaces = [
    { name:'Home',
      path:'/Home'},

    { name:'Cities',
      path:'/Cities'}, 
      
    { name:'About Us',
      path:'/AboutUs'}, 
      
    { name:'Contact',
      path:'/Contact'}]

  return (
    <div className="contenedor-enlaces">

      <LinkRouter to={"/Home"}><h1>LOGO</h1></LinkRouter>
      
        {
          enlaces.map(link => {
            return <LinkRouter className="enlaceItem" to={link.path}>{link.name}</LinkRouter>
          })
        }

    </div>
  )
}
export default LinksNavegacion;