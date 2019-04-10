import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="menu shadow">
                <ul className="menu__list">
                    <li className="menu__item"><NavLink className="menu__link" to="/" exact activeClassName="menu__link_active">Main</NavLink></li>
                    <li className="menu__item"><NavLink className="menu__link" to="/history" activeClassName="menu__link_active">History</NavLink></li>
                </ul>
            </nav>
        );
    }
}