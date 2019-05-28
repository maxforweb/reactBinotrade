import React from 'react';





const Nav = (props) => {

    return (
        <nav>
            {
                props.data.map(function(item, index){
                    return<a key={index} href={item.link}>{item.label}</a>
                })
            }
         </nav>
    );
}


export default Nav;