import React from 'react'
import Employeeinterface from './employeeinterface'

function Leavehistory() {
    return (
        <Employeeinterface>
             <div className="employee-header">
                <h4 className=""> Leave History</h4>
                <div className="employee-profile">
                    <h2>Leave history</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Leave type</th>
                                <th scope="col">from</th>
                                <th scope="col">to</th>
                                <th scope="col">description</th>
                                <th scope="col">PostingDate</th>
                                <th scope="col">Admin remark</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>                
                                <th scope="row">1</th>
                                <td>Annual leave</td>
                                <td>5dec2020</td>
                                <td>15 jan 2021</td>
                                <td>I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves</td>
                                <td>5 oct 2020</td>
                                <td>your leave is granted, bring something for us</td>
                                <td>Approved</td>
                            </tr>

                            <tr>                
                                <th scope="row">2</th>
                                <td>Medical leave</td>
                                <td>5dec2020</td>
                                <td>15 jan 2021</td>
                                <td>I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves</td>
                                <td>5 oct 2020</td>
                                <td>your leave is granted, bring something for us</td>
                                <td>Not approved</td>
                            </tr>
                            <tr>                
                                <th scope="row">1</th>
                                <td>Annual leave</td>
                                <td>5dec2020</td>
                                <td>15 jan 2021</td>
                                <td>I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves</td>
                                <td>5 oct 2020</td>
                                <td>your leave is granted, bring something for us</td>
                                <td>Waiting for approval</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </Employeeinterface>
    )
}

export default Leavehistory
