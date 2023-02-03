import React, { Fragment } from 'react'
import Employess from './Employess'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    let history = useNavigate();

    const handleEdit = (id, meterId, meterSrNo, installation) => {
        localStorage.setItem('MeterId', meterId)
        localStorage.setItem('MeterSrNo', meterSrNo)
        localStorage.setItem('Installation', installation)
        localStorage.setItem('Id', id)
    }


    const handleDelete = (id) => {
        var index = Employess.map(function (e) {
            return e.id
        }).indexOf(id);

        Employess.splice(index, 1);

        history('/');
    }
    return (
        <Fragment>
            <div style={{ margin: "10rem", border: "1px solid black" }} >
                <table style={{ width: "100%", border: "1px solid black" }}>
                    <thead style={{ width: "100%", border: "1px solid black" }}>
                        <tr>
                            <th>Meter Id</th>
                            <th>Meter SrNo</th>
                            <th>Installation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ width: "100%", border: "1px solid black", textAlign: "center", color: "black" }}>
                        {
                            Employess && Employess.length > 0
                                ?
                                Employess.map((items) => {
                                    return (
                                        <tr key={items.id}>
                                            <td>{items.MeterId}</td>
                                            <td>{items.MeterSrNo}</td>
                                            <td>{items.Installation}</td>
                                            <td>
                                                <Link to='/edit'>
                                                    <button style={{background: "#1E90FF", color: "white", padding: ".4rem 1rem" }}
                                                        onClick={() => handleEdit(items.MeterId, items.MeterSrNo, items.Installation)}
                                                    >EDIT</button>
                                                </Link>
                                                &nbsp;
                                                <button onClick={() => handleDelete(items.id)} style={{ background: "red", color: "white", padding: ".4rem 1rem" }}>DELETE</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No Data Available"
                        }
                    </tbody>
                </table>
                <Link to='/create' >
                    <button style={{ width: "100%", background: "#1E90FF", color: "white", padding: ".4rem 1rem" }}>Create A New Record</button>
                </Link>

            </div>
        </Fragment>
    )
}

export default Home