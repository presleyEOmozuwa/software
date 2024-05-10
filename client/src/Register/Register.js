import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css";

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [gender, setGender] = useState("");

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            firstname: firstname,
            lastname: lastname,
            gender: gender
        }

        if (!payload.firstname || !payload.lastname || !payload.gender) {
            console.log("provide required field");
            return;
        }

        axios.post("/api/register", payload).then((res) => {
            console.log(res.data);
        }).catch((err) => err.response.data);
    }

    return (
        <form className='form-data' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor='firstname'>FirstName</label><br />
                <input type='text' id='firstname' onChange={(e) => handleFirstName(e)} />
            </div>
            <div>
                <label htmlFor='lastname'>LastName</label><br />
                <input type='text' id='lastname' onChange={(e) => handleLastName(e)} />
            </div>
            <div>
                <label htmlFor='gender'>Gender</label><br />
                <input type='text' id='gender' onChange={(e) => handleGender(e)} />
            </div>
            <button type='sumit'>Submit</button>
        </form>
    );
};

export default Register;