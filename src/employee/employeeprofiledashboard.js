import React from 'react';
import './employee.css';
import Employeeinterface from '../employee/employeeinterface';

function Employeeprofile() {
    return (
        <div>
            <Employeeinterface>
            <div className="employee-header">
                <h4 className=""> Employee Info</h4>
                <div className="employee-profile">
                    <h2> Employee Info</h2>

                    
                    <div className="viewdetails-col">
                        <div className="leavedetails-title">Employee Name: <span>Temitope Opeyemi</span></div>
                    </div>
                    <div className="viewdetails-col">
                        <div className="leavedetails-title">Employee Department: <span>Information Technology</span></div>
                    </div>
                    <div className="viewdetails-col">
                        <div className="leavedetails-title">Employee Supervisor: <span>Abraham</span></div>
                    </div>
                    <div className="viewdetails-col">
                        <div className="leavedetails-title">Employee Id: <span>11111</span></div>
                    </div>

                    {/* <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="inputdiv">
                                    <input type="text" name="code" required="" className="input"/>
                                    <label htmlFor="code" className="inputlabel">Employee Code</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="code" required="" className="input"/>
                                    <label htmlFor="code" className="inputlabel">Employee Code</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="birth" required="" className="input" placeholder="dd/mm/yy"/>
                                    <label htmlFor="birth" className="inputlabel">Date of birth</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="firstname" required="" className="input"/>
                                    <label htmlFor="firstname" className="inputlabel">First Name</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="lastname" required="" className="input"/>
                                    <label htmlFor="lastname" className="inputlabel">Last Name</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="department" required="" className="input"/>
                                    <label htmlFor="department" className="inputlabel">Department</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="address" required="" className="input"/>
                                    <label htmlFor="address" className="inputlabel">Address</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="inputdiv">
                                    <input type="email" name="email" required="" className="input"/>
                                    <label htmlFor="email" className="inputlabel">Email</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="city" required="" className="input"/>
                                    <label htmlFor="city" className="inputlabel">City/Town</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="country" required="" className="input"/>
                                    <label htmlFor="country" className="inputlabel">Country</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="inputdiv">
                                    <input type="phone" name="phone" required="" className="input"/>
                                    <label htmlFor="phone" className="inputlabel">Phone number</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <button type="submit" value="submit"className="nav-button">Update</button>
                            </div>
                        </div>
                        
                    </form> */}
                </div>
            </div>
            </Employeeinterface>
        </div>
    )
}

export default Employeeprofile
