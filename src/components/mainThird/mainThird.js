import React, {Component} from "react";
import Images from './images';
import '../../scss/mainThird.css'

class MainThird extends Component {
    render(){
        return(
            <div className={'mainThird'}>
                <h3>Более 50 проверенных активов</h3>
                <Images/>
            </div>
        );
    }
}

export default MainThird;