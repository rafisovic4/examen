import { NavLink } from "react-router-dom"
import Ikon from "../../assets/img/shopping-cart.png"
import logo from "../../assets/img/logo.png"
import style from "./Header.module.css"

const Header = ({setActive}) => {
    return (
        <header>
            <NavLink to={"/"}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </NavLink>
            <nav>
                <NavLink className={style.navlink} to={"/"}>главная</NavLink>
                <NavLink className={style.navlink} to={"#catalog"}>каталог</NavLink>
            </nav>
            <div className={style.btns_header}>
                <div className={style.ikon} onClick={() => setActive(true)}>
                    <img src={Ikon} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header