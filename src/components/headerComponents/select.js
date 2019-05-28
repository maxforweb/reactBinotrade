import React, {Component} from 'react';


class Select extends Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false };
    
    }

    toggle(){
        this.setState({isOpened: !this.state.isOpened});
    }

    change(e){
        var button = document.querySelector('button');
        button.textContent = e.target.textContent;
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        let option;
        if(this.state.isOpened){
            option = [
                <div className={'container'}>
                    <p onClick={this.change.bind(this)}>RU</p>
                    <p onClick={this.change.bind(this)}>ENG</p>
                </div>
            ]
        }
        return(
            <div className={'custom'}>
                <button onClick={this.toggle.bind(this)}>RU</button>
                {option}
            </div>
        );
    }
}

export default Select;