import React from "react";
//------------------------------IMG
import UserIcon from "./img/user.png"
//------------------------------STYLE
import "./header_style.css";
//------------------------------ROUTER
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <div className="header__container container">
                <div class="header__menu menu">
                    <div className="header__item">
                        <Link to="/" className="header__logo">Умный город</Link>
                    </div>
                    <div className="header__item">
                        <div className="header__input-search"><input type="text" name="" id="" className="header__search" placeholder="Поиск"/></div>
                    </div>
                    <div className="header__item user-circle">
                        <Link to=""><img className="header__user" src={UserIcon} alt=""/></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;