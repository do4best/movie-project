import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function Scrolltotop() {
    const {pathName} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathName])
    return null
}

export default Scrolltotop;