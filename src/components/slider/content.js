import React from 'react';


const SliderContent =(props) =>{
    return(
        <div id={'sliderContent'}>
            {
                props.data.map(function(item, index){
                    return(
                        <div className={'content'} key={index}>
                            <div>
                            <h1>{item.h1}</h1>
                            <p>{item.p}</p>
                            </div>
                            <img src={item.src} alt={'Money'}/>
                        </div>
                    );
                })
            }
        </div>
    );
    
}

export default SliderContent;