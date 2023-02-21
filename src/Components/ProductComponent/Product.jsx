import {data} from './../DataProduct/Data'
import {Link} from 'react-router-dom'
function ProductPage() {

    return (<>
        {data.map((d,dx)=>{return <Link to={'Ditaled/'+d.id}>{d.title}</Link> })}
    </>)
}
export{ProductPage}