import React from 'react';


const Phones = (props) => {
    return(
        <div className={'phones'}>
            {
                props.data.map(function(item, index){
                    return <img src={item.src} alt="phones" />
                })
            }
        </div>
    )

}

export default Phones;