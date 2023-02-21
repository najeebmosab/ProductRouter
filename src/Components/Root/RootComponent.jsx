import { Outlet } from "react-router-dom";
import {HeaderPage} from '../HeaderComponent/Header'

function RootComponent() {
    return(<>
    <HeaderPage/>
    <Outlet></Outlet>
    </>)
}
export {RootComponent}