import './HeaderPage.css'
import {Link} from 'react-router-dom'
function HeaderPage() {
  return <>
    <nav className='nav'>
      <Link to={"/"}>Home</Link>
      <Link  to={"Product"}>Product</Link>
    </nav>
  </>
}
export { HeaderPage }