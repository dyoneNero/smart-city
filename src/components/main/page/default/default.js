import React, {Component} from 'react';
import LogoSC from '../../img/logo_sc.png';
import './default.css';

class Default extends Component {
    render() {
        return (
            <div className="main__area-default">
                <img src={LogoSC} alt="" className="main__logo"/>
            </div>
        );
    }
}

export default Default;