import React, { useState } from 'react'
import Employess from './Employess'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

const Add = () => {
    const [meterId, setMeterId] = useState("");
    const [meterSrNo, setMeterSrNo] = useState("");
    const [installation, setInstallation] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = meterId;
        let b = meterSrNo;
        let c = installation;
        // let c = meterSrNo
        // let d = installation

        console.log(meterId);
        console.log(meterSrNo);
        console.log(installation);


        Employess.push({ id: uniqueId, MeterId: a, MeterSrNo: b, Installation: c });
        history('/');
    }
    return (
        <div>
            <form style={{ border: "2px solid black", width: "60%", margin: " 10rem auto" }}>
                <h2 style={{ background: "grey", textAlign: "center", color: "white" }}>Create A New Record</h2>
                <div style={{ padding: "1rem 3rem" }} controlid="formMeterId">
                    <input style={{ border: "1px solid black", padding:".5rem 2rem" }} type="text" placeholder='Enter A Meter ID'
                        required onChange={(e) => setMeterId(e.target.value)} />
                </div>
                <div style={{ padding: "1rem 3rem" }} controlid="formMeterSrNo">
                    <input style={{ border: "1px solid black", padding:".5rem 2rem" }} type="text" placeholder='Enter A Meter Serial No'
                        required onChange={(e) => setMeterSrNo(e.target.value)} />
                </div>
                <div style={{ padding: "1rem 3rem" }} controlid="formInstallation">
                    <input style={{ border: "1px solid black", padding:".5rem 2rem" }} type="text" placeholder='Enter A Installation'
                        required onChange={(e) => setInstallation(e.target.value)} />
                </div>

                <button style={{ width: "100%", background: "blue", color: "white", padding: ".4rem 1rem" }}
                    onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Add