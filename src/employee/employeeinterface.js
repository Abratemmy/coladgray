import React, {useState} from 'react';
import {FaBars,FaSignOutAlt }from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {FiChevronRight} from 'react-icons/fi';
import {MdLeakAdd} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

function Employeeinterface({children}) {
    const [subnav, setSubnav] = useState(false);

    function showsubnav(){
        setSubnav(!subnav)
    }
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
                <div className="user-sidebar text-center" style={{marginBottom:'20px', color:'#38bbc8'}}>
                    <div>welcome temitope</div>
                    <div>No of leaves in days: 20</div>
                    <div>No of leaves remaining: 5</div>
                </div>
                <ul>
                    <li >
                        <NavLink to= '/employee_profile'exact className="sidebar-navlink"><CgProfile className="sidebar-icons" /><span>My profile</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='' exact   className="sidebar-navlink"><MdLeakAdd className="sidebar-icons"/><span>Change password</span></NavLink>
                    </li>
                    <li onClick={showsubnav} >  
                        <NavLink to="#" className="sidebar-navlink sidebarsub"><MdLeakAdd className="sidebar-icons"/><span>Leave 
                            <FiChevronRight className="sub-menu-icon"/></span>
                        </NavLink>
                        <div  className={subnav ? "show-subnav":"no-showsubnav"}>
                            <NavLink to='/apply_leave'exact className="sub-menu-navlink">Apply Leave</NavLink>
                            <NavLink to='/Leave_history'exact  className="sub-menu-navlink">Leave History</NavLink>
                        </div>
                    </li>
                    <li>
                    <NavLink to='/'exact className="sidebar-navlink"><FaSignOutAlt className="sidebar-icons"/><span>Sign Out</span></NavLink>                
                    </li>
                </ul>
               
                
                
            </div>


            <div className="content">
                {children}
            </div>    
        </div>
    )
}

export default Employeeinterface
