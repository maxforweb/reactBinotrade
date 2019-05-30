import React from 'react';
import img1 from '../../assets/phone1.svg';
import img2 from '../../assets/phone2.svg';
import Phones from "./phones";
import '../../scss/mainFourth.css';

const img = [
    {
        src: img1
    },
    {
        src: img2
    }
]

const MainFourth = () =>{
    return(
        <div className={'mainFourth'}>
            <div class="mobile">
                <h1>Мобильные приложения</h1>
                <p>Торговля на нескольких графиках, технический анализ, история котировок,
                    и многое другое. Все, что вам нужно на платформе, доступно на любом устройстве по вашему выбору
                </p>
            </div>
           <Phones data={img}/>
            </div>
        );
}

export default MainFourth;