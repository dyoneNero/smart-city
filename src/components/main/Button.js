import './button_style.css';
import {Link} from "react-router-dom";
import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <Link to={this.props.linkBtn} className="menu__btn">
                <img src={this.props.imageBtn} alt=""/>
                <p>{this.props.textBtn}</p>
            </Link>
        );
    }
}

export default Button;