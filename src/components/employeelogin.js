import React, { Component } from 'react';
import './logindetails.css';
import {NavLink} from 'react-router-dom'
import Landing from './landing';


export class Employeelogin extends Component {
    render() {
        return (
            <div className="">
                <Landing>
                    <div className="content-start">
                        <div className="maincontentlogin">
                            <h2 className="text-center"> Welcome to Employee Leave management system</h2>
                            <form>
                                <div className="row">
                                    <div className="col-lg-3 col-md-2 col-sm-12"></div>
                                    <div className="col-lg-6 col-md-8 col-sm-12">
                                        <div className="content-input">
                                            <h5 className="text-left">Employee Login</h5>
                                            <div className="inputdiv">
                                                <input type="email" name="email" required="" className="input"/>
                                                <label htmlFor="email" className="inputlabel">Email</label>
                                            </div>

                                            <div className="inputdiv">
                                                <input type="password" name="password" required=""className="input"/>
                                                <label htmlFor="password" className="inputlabel">Password</label>
                                            </div>

                                            <div className="text-right">
                                                <NavLink to='./employee_profile' className="nav-button">Login</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-sm-12"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Landing>
            </div>
        
              
        )
    }
}

export default Employeelogin
