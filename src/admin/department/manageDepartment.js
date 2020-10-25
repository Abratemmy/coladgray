import React from 'react'
import Admininterface from '../admin-interface';
import {AiFillDelete} from 'react-icons/ai'

function ManageDepartment() {
    return (
        <Admininterface>
            <div className="employee-header">
                <h4 className=""> Manage Department</h4>
                <div className="employee-profile">
                    <h2>Department Info</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Dept Name</th>
                                <th scope="col">Dept short name</th>
                                <th scope="col">Dept code</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Human Resources</td>
                                <td>Hr</td>
                                <td>hr001</td>
                                <td>20-12-2020</td>
                                <td><AiFillDelete /></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Information Technology</td>
                                <td>IT</td>
                                <td>IT001</td>
                                <td>20-12-2020</td>
                                <td><AiFillDelete /></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Sales</td>
                                <td>sl</td>
                                <td>sl001</td>
                                <td>20-12-2020</td>
                                <td><AiFillDelete /></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </Admininterface>
    )
}

export default ManageDepartment
