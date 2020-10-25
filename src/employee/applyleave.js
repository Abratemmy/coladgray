import React, { Component } from 'react'
import Employeeinterface from './employeeinterface';
import './employee.css'

export class Applyleave extends Component {
    render() {
        return (
           <Employeeinterface>
               <div className="employee-header">
                    <h4 className=""> Apply for leave</h4>
                        <div className="employee-profile">
                            <h2>Apply for leave</h2>

                            <div className="">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="inputdiv">
                                                {/* <input type="text" name="code" required="" className="input"/>
                                                <label htmlFor="code" className="inputlabel">Employee Code</label> */}
                                                <select >
                                                    <option value="1">select Leave type</option>
                                                    <option value="2">Casual leave</option>
                                                    <option value="3">medical leave</option>
                                                    <option value="4">maternity leave</option>
                                                    <option value="4">others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="inputdiv">
                                                <input type="text" name="fromdate" required="" className="input"placeholder="dd/mm/yy"/>
                                                <label htmlFor="fromdate" className="inputlabel">From Date</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="inputdiv">
                                                <input type="text" name="toDate" required="" className="input"placeholder="dd/mm/yy"/>
                                                <label htmlFor="todate" className="inputlabel">To Date</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="inputdiv">
                                                <textarea name="description" id=""cols="10"  rows="1" placeholder="" className="textarea input" required=""></textarea>    
                                                <label htmlFor="code" className="inputlabel">Description</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <button type="submit" value="submit"className="nav-button">Apply</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
           </Employeeinterface>
        )
    }
}

export default Applyleave
