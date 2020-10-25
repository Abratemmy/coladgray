import React, { Component } from 'react'
import Admininterface from '../admin-interface'

export class Addemployee extends Component {
    render() {
        return (
            <Admininterface>
                <div className="employee-header">
                    <h4 className="">Add Employee</h4>
                    <div className="employee-profile">
                        <h2>Employee Info</h2>
                        <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inputdiv">
                                    <input type="text" name="text" required="" className="input"/>
                                    <label htmlFor="text" className="inputlabel">Employee Code(Must be unique</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="text" required="" className="input"/>
                                    <label htmlFor="text" className="inputlabel">Gender</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="text" required="" className="input"/>
                                    <label htmlFor="text" className="inputlabel">Birthday</label>
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
                                    <label htmlFor="lastname" className="inputlabel">Last name</label>
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
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inputdiv">
                                    <input type="email" name="email" required="" className="input"/>
                                    <label htmlFor="email" className="inputlabel">Email</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="country" required="" className="input"/>
                                    <label htmlFor="country" className="inputlabel">Country</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="inputdiv">
                                    <input type="text" name="city" required="" className="input"/>
                                    <label htmlFor="city" className="inputlabel">Phone number</label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inputdiv">
                                    <input type="password" name="password" required="" className="input"/>
                                    <label htmlFor="password" className="inputlabel">Password</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inputdiv">
                                    <input type="password" name="cpassword" required="" className="input"/>
                                    <label htmlFor="cpassword" className="inputlabel">No of leave per day</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="inputdiv">
                                    <input type="password" name="cpassword" required="" className="input"/>
                                    <label htmlFor="cpassword" className="inputlabel">confirm Password</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <button type="submit" value="submit"className="nav-button">Add</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>

            </Admininterface>        
        )
    }
}

export default Addemployee
