import React, {Component} from 'react';
import Description from './description';
import icon1 from '../../assets/icon1.svg';
import '../../scss/mainFirst.css';

const description  = [
    {
        src: icon1,
        label: 'Оттачи выигрышную стартегию на учебном счете'
    },
    {
        src: icon1,
        label: 'Оттачи выигрышную стартегию на учебном счете'
    },
    {
        src: icon1,
        label: 'Оттачи выигрышную стартегию на учебном счете'
    },
    {
        src: icon1,
        label: 'Оттачи выигрышную стартегию на учебном счете'
    }
]

class MainFirst extends Component {
    render(){
        return(
            <section className={'mainFirst'}>
                <div></div>
                <div className={'start'}>
                    <h1>Простой инструмент для онлайн торговли</h1>
                    <p>Первая прибыль через 1 минуту</p>
                    <button>Начать торговать</button>
                </div>
                <Description data={description} />
            </section>
        );
    }
}

export default MainFirst; 