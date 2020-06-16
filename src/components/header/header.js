import React from 'react';
import style from './header.module.css';

export default class Header extends React.Component{

    render(){
        return(
            <div className={style.header}>
                <div className={style.logo}>
                    StarWarsDB 
                </div>
                <div className={style.nav}>
                    <ul>
                        <li>People</li>
                        <li>Planets</li>
                        <li>Starships</li>
                    </ul>
                </div>
            </div>
        );
    }
}