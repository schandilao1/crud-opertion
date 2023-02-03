import React, { useState, useEffect } from 'react'
import Employess from './Employess'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';


const Edit = () => {
    const [meterId, setMeterId] = useState("");
    const [meterSrNo, setMeterSrNo] = useState("");
    const [installation, setInstallation] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employess.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => { 
        e.preventDefault();

        let a = Employess[index];
        a.MeterId = meterId;
        a.MeterSrNo = meterSrNo;
        a.Installation = installation;
        history('/');
    }

    useEffect(() => {
        setMeterId(localStorage.getItem('MeterId'));
        setMeterSrNo(localStorage.getItem('MeterSrNo'));
        setInstallation(localStorage.getItem('Installation'));
        setId(localStorage.getItem('Id'));
    }, [])

    return (
        <div>
            <form style={{ border: "2px solid black", width: "60%", margin: " 10rem auto" }}>
                <h2 style={{ background: "grey", textAlign: "center", color: "white" }}>Create A New Record</h2>
                <div style={{ padding: "1rem 3rem" }} controlid="formMeterId">
                    <input value={meterId} style={{ border: "1px solid black", padding: ".5rem 2rem" }} type="text" placeholder='Enter A Meter ID'
                        required onChange={(e) => setMeterId(e.target.value)} />
                </div>
                <div style={{ padding: "1rem 3rem" }} controlid="formMeterSrNo">
                    <input value={meterSrNo} style={{ border: "1px solid black", padding: ".5rem 2rem" }} type="text" placeholder='Enter A Meter Serial No'
                        required onChange={(e) => setMeterSrNo(e.target.value)} />
                </div>
                <div style={{ padding: "1rem 3rem" }} controlid="formInstallation">
                    <input value={installation} style={{ border: "1px solid black", padding: ".5rem 2rem" }} type="text" placeholder='Enter A Installation'
                        required onChange={(e) => setInstallation(e.target.value)} />
                </div>

                <button style={{ width: "100%", background: "blue", color: "white", padding: ".4rem 1rem" }}
                    onClick={(e) => handleSubmit(e)} type="submit">Update</button>
            </form>
        </div>
    )
}

export default Edit