import React from 'react';
import {NavLink} from 'react-router-dom';




const Nav = (props) => {

    return (
        <nav>
            {
                props.data.map(function(item, index){
                    return <NavLink key={index} to={item.link}>{item.label}</NavLink>
                })
            }
         </nav>
    );
}


export default Nav;