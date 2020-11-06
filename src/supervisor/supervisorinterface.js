import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars } from 'react-icons/fa';
import {BiLogInCircle, BiLogIn} from 'react-icons/bi'

function Supervisorinterface({children}) {
    return (
        <div>
            <input type="checkbox" id="check" className="headerinput"/>
            <div className="header">

                <label htmlFor="check" className="headerlabel">
                    <FaBars className="headericon" id="sidebar_btn"/>
                </label>
                <div className="left_area">
                <h3>Leave <span> Application</span></h3>
                </div>
                <div className="right_area">
                    <NavLink to='/' className="logout_btn">Logout</NavLink>
                </div>
            </div>

            <div className="sidebar">
                <ul style={{paddingTop:'50px'}}>
                    <li style={{marginBottom:'20px'}}>
                    <NavLink to='/supervisordashboard'exact className="sidebar-navlink"><BiLogInCircle className="sidebar-icons" /><span>Leave Request</span></NavLink>
                    </li>
                    <li style={{marginBottom:'20px'}}>
                    <NavLink to='/sup_adminremark' exact   className="sidebar-navlink"><BiLogIn className="sidebar-icons"/><span>Admin Remark</span></NavLink>
                    </li>
                </ul>                
            </div>


            <div className="content">
                {children}
            </div>    

        </div>
    )
}

export default Supervisorinterface
