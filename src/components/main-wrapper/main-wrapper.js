import React, { useState } from 'react';
import "./main-wrapper.scss";
import axios from "axios";
import Rightsidebar from '../right-side-bar/right-side-bar';
const MainWrapper = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [displayname, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [location, setLocation] = useState("");
    let dateObj = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = monthNames[month] + " " + day + "," + year;
    const addEmployees = () => {
        console.log("added");
        axios.post('http://localhost:3001/create', {
            firstname: firstname,
            lastname: lastname,
            displayname: displayname,
            email: email,
            phone: phone,
            location: location
        }).then(() => console.log('success'));
    }


    const reset = () => {
        let firstNameValue = document.querySelector('.first-name');
        let lastNameValue = document.querySelector('.last-name');
        let displayNameValue = document.querySelector('.display-name');
        let emailValue = document.querySelector('.email');
        let phoneValue = document.querySelector('.phone');
        let locationValue = document.querySelector('.location');
        axios.get('http://localhost:3001/employees').then((response) => {
            let data = response.data[response.data.length - 1];
            const { firstname, lastname, displayname, email, phone, location } = data;
            firstNameValue.value = firstname;
            lastNameValue.value = lastname;
            displayNameValue.value = displayname;
            emailValue.value = email;
            phoneValue.value = phone;
            locationValue.value = location;
            console.log("dataaaaa", data);
            console.log("firstname:::::", firstNameValue);
        })

    }

    return (
        <>
            <div className='wrapper'>
                <div className='wrapper__header'>
                    <div className='wrapper__header__text'>Good Morning</div>
                    <div className='wrapper__header__current-date'>{newdate}</div>
                </div>
                <div className='wrapper__body'>
                    <div className='wrapper__body__profile'>My profile</div>
                    <form onSubmit={addEmployees} className="form">
                        <div className='wrapper-body__first-name form__group'>

                            <input className='form__input first-name' type="text" placeholder='firstname' name="firstname" onChange={(e) => setFirstName(e.target.value)} required></input>
                            <label className='form__label'>firstname</label>
                        </div>
                        <div className='wrapper-body__last-name form__group'>
                            <input className='form__input last-name' type="text" placeholder='lastname' name="lastname" onChange={(e) => setLastName(e.target.value)} required></input>
                            <label className='form__label'>lastname</label>
                        </div>
                        <div className='wrapper-body__display-name form__group'>
                            <label className='form__label'>displayname</label>
                            <input className='form__input display-name' type="text" placeholder='displayname' name="displayname" onChange={(e) => setDisplayName(e.target.value)} required></input>
                        </div>
                        <div className='wrapper-body__email form__group'>
                            <label className='form__label'>email</label>
                            <input className='form__input email' type="text" placeholder='email' name="email" onChange={(e) => setEmail(e.target.value)} required></input>
                        </div>
                        <div className='wrapper-body__phone form__group'>
                            <label className='form__label'>phone</label>
                            <input className='form__input phone' type="text" placeholder='phone' name="phone" onChange={(e) => setPhone(e.target.value)} required></input>
                        </div>
                        <div className='wrapper-body__location form__group'>
                            <label className='form__label'>location</label>
                            <input className='form__input location' type="text" placeholder='location' name="location" onChange={(e) => setLocation(e.target.value)} required></input>
                        </div>
                        <button className='save-button' type='submit'>Save Changes</button>
                        <button className='reset-button' onClick={() => reset()}>reset</button>
                    </form>


                </div>
            </div>
            <Rightsidebar firstname={firstname} lastname={lastname} email={email} />
        </>



    )
}

export default MainWrapper;
