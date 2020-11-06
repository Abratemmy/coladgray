import React, { Component } from 'react'
import Admininterface from '../admin-interface';
import {NavLink} from 'react-router-dom'

export class AddSupervisor extends Component {
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
                                    <h5 className=""> Add Supervisor</h5>
                                    <div className="admin-add">
                                        <div className="inputdiv">
                                            <input type="text" name="name" required="" className="input"/>
                                            <label htmlFor="name" className="inputlabel">Supervisor Name</label>
                                        </div>
                                        <div className="inputdiv">
                                            <input type="text" name="email" required="" className="input"/>
                                            <label htmlFor="email" className="inputlabel">Supervisor Department</label>
                                        </div>
                                       
                                        <div className="">
                                            <NavLink to='/add_supervisor' className="nav-button">Add</NavLink>
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

export default AddSupervisor
