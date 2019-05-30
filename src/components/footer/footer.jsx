import React from 'react';
import app1 from '../../assets/app1.svg';
import app2 from '../../assets/app2.svg';
import social1 from '../../assets/social1.svg';
import social2 from '../../assets/social2.svg';
import social3 from '../../assets/social3.svg';
import social4 from '../../assets/social4.svg';
import '../../scss/footer.css';



const Footer = () =>{
    return(
        <footer>
            <div>
            <h3>Правовая информация</h3>
            <a href="#">Положения и условия</a>
            <a href="#">Политика по борьбе с отмыванием денег</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Политика Проведения платежей</a>
        </div>
        <div>
            <h3>Трейдерам</h3>
            <a href="#">Активы</a>
            <a href="#">Архив котировок</a>
            <a href="#">Частые вопросы</a>
            <a href="#">Обучение</a>
        </div>
        <div>
            <h3>О компании</h3>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
        </div>
        <div>
            <img src={app1} alt="App Link"/>
            <img src={app2} alt="App Link"/>
        </div>
        <div class="social">
            <img src={social1} alt="1"/>
            <img src={social2} alt="2"/>
            <img src={social3} alt="3"/>
            <img src={social4} alt="4"/>
        </div>
        </footer>
    )
}

export default Footer;