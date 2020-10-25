import React, { Component } from 'react'
import Admininterface from '../admin-interface';
import {NavLink} from 'react-router-dom'

export class Addleave extends Component {
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
                                    <h5 className=""> Add Leave type</h5>
                                    <div className="admin-add">
                                        <div className="inputdiv">
                                            <input type="text" name="text" required="" className="input"/>
                                            <label htmlFor="text" className="inputlabel">Leave Type</label>
                                        </div>
                                        <div className="inputdiv">
                                        <textarea name="description" id=""cols="1"  rows="1"  className="textarea input" required=""></textarea>
                                            <label htmlFor="email" className="inputlabel">Description</label>
                                        </div>
                                        
                                        <div className="">
                                            <NavLink to='/add_leave' className="nav-button">Add</NavLink>
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

export default Addleave
