import React, { Component } from 'react'
import Admininterface from '../admin-interface';
import {NavLink} from 'react-router-dom'

export class AddDepartment extends Component {
    render() {
        return (
            <Admininterface>
                <div className="content-start">
                <div className="maincontentlogin">                  
                    <form>
                        <div className="row">
                            <div className="col-lg-3 col-md-2 col-sm-12"></div>
                            <div className="col-lg-6 col-md-8 col-sm-12">                                
                                <div className="admin-center">
                                    <h5 className=""> Add Department</h5>
                                    <div className="admin-add">
                                        <div className="inputdiv">
                                            <input type="email" name="email" required="" className="input"/>
                                            <label htmlFor="email" className="inputlabel">Department Name</label>
                                        </div>
                                        <div className="inputdiv">
                                            <input type="email" name="email" required="" className="input"/>
                                            <label htmlFor="email" className="inputlabel">Department short Name</label>
                                        </div>
                                        <div className="inputdiv">
                                            <input type="email" name="email" required="" className="input"/>
                                            <label htmlFor="email" className="inputlabel">Department Code</label>
                                        </div>
                                        <div className="">
                                            <NavLink to='/add_department' className="nav-button">Add</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-sm-12"></div>
                        </div>
                   
                    </form>
                </div>
                </div>
            </Admininterface>
        )
    }
}

export default AddDepartment
