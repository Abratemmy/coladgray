import React, {useState} from 'react';
import {FaBars,FaSignOutAlt}from 'react-icons/fa';
import {MdDashboard, MdPerson, MdLeakAdd} from 'react-icons/md';
import {FcDepartment} from 'react-icons/fc';
import {FiChevronRight} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';


function Admininterface({children}){
    const [subnavsuper, setSubnavsuper] = useState(false);
    function showsubnavsuper(){
        setSubnavsuper(!subnavsuper)
    }
    const [subnav, setSubnav] = useState(false);
    function showsubnav(){
        setSubnav(!subnav)
    }
    const [subnav1, setSubnav1] = useState(false);
    function showsubnav1(){
        setSubnav1(!subnav1)
    }
    const [subnav2, setSubnav2] = useState(false);
    function showsubnav2(){
        setSubnav2(!subnav2)
    }
    // function showsubnav1(){
    //     setSubnav(!subnav1)
    // }
    // function showsubnav2(){
    //     setSubnav(!subnav2)
    // }
   
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

            <div className="sidebar" >
                <ul  >
                    <li >
                        <NavLink to= '/admin_dashboard'exact className="sidebar-navlink"><MdDashboard className="sidebar-icons" /><span>Dashboard</span></NavLink>
                    </li>
                    <li onClick={showsubnavsuper}>  
                        <NavLink to='#'exact className="sidebar-navlink sidebarsub"><FcDepartment className="sidebar-icons"/><span>Supervisor
                            <FiChevronRight className="sub-menu-icon"/></span>
                        </NavLink>
                        <div className={subnavsuper ? "show-subnav":"no-showsubnav"} id="department" >
                            <NavLink to='/add_supervisor'exact className="sub-menu-navlink">add Supervisor</NavLink>
                            <NavLink to='/manage_supervisor'exact className="sub-menu-navlink">Manage Supervisor</NavLink>
                        </div>
                    </li>
                    <li onClick={showsubnav}>  
                        <NavLink to='#'exact className="sidebar-navlink sidebarsub"><FcDepartment className="sidebar-icons"/><span>Department 
                            <FiChevronRight className="sub-menu-icon"/></span>
                        </NavLink>
                        <div className={subnav ? "show-subnav":"no-showsubnav"} id="department" >
                            <NavLink to='/add_department'exact className="sub-menu-navlink">add department</NavLink>
                            <NavLink to='/manage_department'exact className="sub-menu-navlink">Manage Department</NavLink>
                        </div>
                    </li>
                    <li onClick={showsubnav1}> 
                        <NavLink to='#'exact className="sidebar-navlink sidebarsub"><MdLeakAdd className="sidebar-icons"/><span>Leave type
                        <FiChevronRight className="sub-menu-icon"/> </span></NavLink>                
                        <div className={subnav1 ? "show-subnav":"no-showsubnav"} id="department">
                            <NavLink to='/add_leave' exact className="sub-menu-navlink">Add Leave</NavLink>
                            <NavLink to='/manage_leave' exact className="sub-menu-navlink">Manage Leave</NavLink>
                        </div>
                    </li>
                    <li onClick={showsubnav2}> 
                        <NavLink to='#'exact className="sidebar-navlink sidebarsub"><MdPerson className="sidebar-icons"/><span>Employees
                            <FiChevronRight className="sub-menu-icon" /> </span></NavLink>                
                        <div className={subnav2 ? "show-subnav":"no-showsubnav"}  id="department">
                            <NavLink to='/add_employee'exact className="sub-menu-navlink">Add Employee</NavLink>
                            <NavLink to='/manage_employee' exact className="sub-menu-navlink">Manage Employee</NavLink>
                        </div>
                    </li>
                    {/* <li> 
                        <NavLink to='#'exact className="sidebar-navlink sidebarsub"><FaFacebookF className="sidebar-icons"/><span>Leave Management</span></NavLink>                
                        <div className="sub-menu" id="department">
                            <NavLink to='/'exact className="sub-menu-navlink">add department</NavLink>
                            <NavLink to='/'exact className="sub-menu-navlink">add department</NavLink>
                        </div>
                    </li> */}
                    <li> 
                        <NavLink to='/admin_login'exact className="sidebar-navlink"><FaSignOutAlt className="sidebar-icons"/><span>Signout</span></NavLink>                
                    </li>
                </ul>
                
               
               
            </div>


            <div className="content">
                {children}
            </div>    
        </div>
    )
}
// }

export default Admininterface


