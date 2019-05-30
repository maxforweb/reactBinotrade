import React  from 'react';
import logo from "../../logo.svg";
import Burger from './burger';
import Select from './select';
import Nav from './nav';
import '../../scss/header.css';
import {NavLink} from 'react-router-dom';

const menu = [
    {
        link: '/traders',
        label: 'Трейдерам'
    },
    {
        link: '/about',
        label: 'О компании'
    },
    {
        link: '/sign-in',
        label: 'Войти'
    },
    {
        link: '/sign-up',
        label: 'Зарегестрироваться'
    }
        
]

const Header = ()=> {
    
        return(
        <header>
            <div className={'logo'}> 
                <div>
                    <img src={logo} />
                    <NavLink to="/">Binotrade</NavLink>
                </div>
                <Select  />
            </div> 
            <Nav data={menu}/>
            <Burger  />
        </header>);
    }

export default Header;