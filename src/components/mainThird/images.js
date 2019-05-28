import React, {Component} from 'react';
import img1 from '../../assets/Client1.png';
import img2 from '../../assets/Client2.png';
import img3 from '../../assets/Client3.png';
import img4 from '../../assets/Client4.png';
import img5 from '../../assets/Client5.png';
import img6 from '../../assets/Client6.png';
import img7 from '../../assets/Client7.png';
import img8 from '../../assets/Client8.png';

const images = [img1,img2,img3,img4,img5,img6,img7,img8];

class Images extends Component {
    constructor(props){
        super(props);
        this.state = {img: images};
    }
    render(){
        return(
            <div>
                {
                    this.state.img.map(function(item,index){
                        return <img src={item} key={index} alt={'clients'} />
                    })
                }
            </div>
        );
    }
}

export default Images;
