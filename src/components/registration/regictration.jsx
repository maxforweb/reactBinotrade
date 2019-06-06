import React from 'react';
import '../../scss/registration.css';


const Registration = () => {

    const change = (e) =>{

        if (e.target.value.length > 0){
            
        console.log(e.target.value)
            e.target.classList.add('active');
        
        }
        else {
            e.target.classList.remove('active');
        }
    }

    return(
        <div className={'registrationForm'}>
            <input type="text" name="name" placeholder="NAME" onInput={change}/>
            <input type="email" name="email" id="email"  placeholder="EMAIL" onInput={change} />
            <input type="password"  id="password1" placeholder="paswword" onInput={change} />
            <input type="password" id="password2" placeholder="repeat your password " onInput={change}/>
        </div>
    );
}

export default Registration;