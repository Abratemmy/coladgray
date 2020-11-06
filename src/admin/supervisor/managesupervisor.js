import React from 'react';import Admininterface from '../admin-interface';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'

function Managesupervisor() {
    return (
        <Admininterface>
            <div className="employee-header">
                <h4 className="">Manage Supervisor</h4>
                    <div className="employee-profile">
                        <h2>Supervisor Info</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Sr no</th>
                                    <th scope="col">full Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Reg Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Akanni</td>
                                <td>Humanresources</td>
                                <td>12-2</td>
                                <td><AiFillEdit /><span><AiFillDelete /></span></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Akanni</td>
                                <td>Humanresources</td>
                                <td>12-2</td>
                                <td><AiFillEdit /><span><AiFillDelete /></span></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Akanni</td>
                                <td>Humanresources</td>
                                <td>12-2</td>
                                <td><AiFillEdit /><span><AiFillDelete /></span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </Admininterface>
    )
}

export default Managesupervisor
