import React from 'react';
import "./right-side-bar.scss";

const Rightsidebar = (props) => {
    const { firstname, lastname, email } = props;
    return (
        <div className='right-side-bar'>
            <div className='right-side-bar__header'>
                <button className='btn btn-danger'>+ ADD PROJECT</button>
                <img src={require("../../asserts/profile-header-icon.PNG")}></img>

                <div className='right-side-bar__details'>
                    <div className='right-side-bar__details__name'>{firstname === "" ? "please set name" : firstname}</div>
                    <div className='right-side-bar__details__sub-name'>Project Manager</div>
                </div>


            </div>
            <div className='right-side-bar__display-section'>
                <div className='profile-pic-section'>
                    <img src={require("../../asserts/profile-pic.PNG")}></img>
                </div>
                <div className='proile-name-section'>
                    <div className='display-name'>
                        {firstname === "" ? "please set name" : firstname + " " + lastname}

                    </div>
                    <div className='display-email'>
                        {email === "" ? "please set email" : email}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Rightsidebar;
