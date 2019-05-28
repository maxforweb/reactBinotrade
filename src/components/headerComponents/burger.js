import React, {Component} from 'react';

const Burger = (props)=>{
    
    const menuOpen= () => {
        let menu = document.querySelector('nav');
        let burger = document.getElementById('burger');
        menu.classList.toggle('menu-active');
        burger.classList.toggle('rotate');
    }
     
    return(
        <div id={'burger'} onClick={menuOpen}>
            <span></span>
        </div>
    );
       
}    



export default Burger;