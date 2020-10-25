import React from 'react'
import Admininterface from '../admin-interface';
import {AiFillDelete} from 'react-icons/ai';

function Manageleave() {
    return (
        <Admininterface>
            <div className="employee-header">
                <h4 className=""> Manage Leave Type</h4>
                <div className="employee-profile">
                    <h2>Leave type Info</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Leave type</th>
                                <th scope="col">Description</th>
                                <th scope="col">creation Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Casual leave</td>
                                <td>casual leave</td>
                                <td>20-12-2020</td>
                                <td><AiFillDelete /></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Medical leave</td>
                                <td>Medical leave test</td>
                                <td>20-12-2020</td>
                                <td><AiFillDelete /></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Restricted holidays</td>
                                <td>Restricted holiday</td>
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

export default Manageleave
