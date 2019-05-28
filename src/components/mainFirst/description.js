import React, {Component} from 'react';

class Descrition extends Component {
    render(){
        return (
        <div className={'description'}>
            {
                this.props.data.map(function(item, index){
                    return(<div key={index}>
                        <img src={item.src}/>
                        <span>{item.label}</span>
                    </div>);
                })
            }
        </div>
        );
    }
}

export default Descrition;