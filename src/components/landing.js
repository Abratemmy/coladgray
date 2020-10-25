import React from 'react';
import {FaBars }from 'react-icons/fa';
import {BiLogInCircle, BiLogIn} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';
function Landing({children}) {
    return (
        <div>
            <input type="checkbox" id="check" className="headerinput"/>
            <div className="header">

                <label htmlFor="check" className="headerlabel">
                    <FaBars className="headericon" id="sidebar_btn"/>
                </label>
                <div className="left_area">
                    <h3>Colad<span>Gray</span></h3>
                </div>
                <div className="right_area">
                    <NavLink to='/' className="logout_btn">Logout</NavLink>
                </div>
            </div>

            <div className="sidebar">
                <ul style={{paddingTop:'50px'}}>
                    <li style={{marginBottom:'30px'}}>
                    <NavLink to='./'exact className="sidebar-navlink"><BiLogInCircle className="sidebar-icons" /><span>Employee Login</span></NavLink>
                    </li>
                    {/* <li>
                    <NavLink to='./password_recovery' exact   className="sidebar-navlink"><FaFacebookF className="sidebar-icons"/><span>Emp Password Recovery</span></NavLink>
                    </li> */}
                    <li>
                    <NavLink to='./admin_login'exact className="sidebar-navlink"><BiLogIn className="sidebar-icons"/><span>Admin Login</span></NavLink>                
                    </li>
                </ul>
               
                
                
            </div>


            <div className="content">
                {children}
            </div>    
        </div>
    )
}

export default Landing

