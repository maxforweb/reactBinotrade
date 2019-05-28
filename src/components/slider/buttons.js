import React, {Component} from 'react';

class Buttons extends Component {
    
    slide(e){
        document.getElementsByClassName("activeSlide")[0].classList.remove("activeSlide");
        e.target.classList.add("activeSlide");
        let nowId = e.target.id.split( '-' )[ 1 ] - 1;
        let nowPosition =  -100 * nowId;
        document.getElementById('sliderContent').style.left = nowPosition + '%';
    }

    render(){
        return(
            <div id={'sliderButton'}>
                <p id={'slide-1'} onClick={this.slide.bind(this)} className={'activeSlide'}>Минимальный депозит 10$</p>
                <p id={'slide-2'} onClick={this.slide.bind(this)} >Персональный менеджер</p>
                <p id={'slide-3'} onClick={this.slide.bind(this)} >Бесплатное обучение</p>
                <p id={'slide-4'} onClick={this.slide.bind(this)} >Круглосуточная поддержка</p>
            </div>);
    }
}

export default Buttons;