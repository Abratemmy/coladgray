import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Admindashboard from '../admin/admindashboard.js';
import AddDepartment from '../admin/department/addDepartment.js';
import ManageDepartment from '../admin/department/manageDepartment.js';
import Addemployee from '../admin/employeeadmin/addemployee.js';
import Manageemployee from '../admin/employeeadmin/manageemployee.js';
import Addleave from '../admin/Leave/addleave.js';
import Manageleave from '../admin/Leave/manageleave.js';
import AddSupervisor from '../admin/supervisor/addsupervisor.js';
import Managesupervisor from '../admin/supervisor/managesupervisor.js';
import Adminlogin from '../components/adminlogin.js';
import Employeelogin from '../components/employeelogin.js';
import Supervisorlogin from '../components/supervisorlogin.js';
import Applyleave from '../employee/applyleave.js';
import Employeeprofile from '../employee/employeeprofiledashboard.js';
import Leavehistory from '../employee/leavehistory.js';
import SupAdminRemark from '../supervisor/supAdminRemark.js';
import Supervisordashboard from '../supervisor/supervisordashboard.js';
import View from '../supervisor/view.js';


const Router = ()=>(
    <Switch>
        {/* pages */}
        <Route exact path='/coladgray' component={Employeelogin} />
        <Route exact path='/' component={Employeelogin} />
        <Route exact path='/admin_login' component={Adminlogin} />
        <Route exact path='/admin_dashboard' component={Admindashboard} />       
        <Route exact path='/add_department' component={AddDepartment}/>
        <Route exact path='/manage_department' component={ManageDepartment} />
        <Route exact path='/add_leave' component={Addleave} />
        <Route exact path='/manage_leave' component={Manageleave} />
        <Route exact path='/employee_profile' component={Employeeprofile} />
        <Route exact path='/apply_leave' component={Applyleave} />
        <Route exact path='/leave_history' component={Leavehistory} />
        <Route exact path='/add_employee' component={Addemployee} />
        <Route exact path="/manage_employee" component={Manageemployee} />
        <Route exact path='/add_supervisor' component={AddSupervisor} />
        <Route exact path='/manage_supervisor' component={Managesupervisor} />

        <Route exact path='/supervisor_login' component={Supervisorlogin} />
        <Route exact path='/supervisordashboard' component={Supervisordashboard} />
        <Route exact path='/supervisordashboard/dashboard_view/:postId' component={View} />
        <Route exact path='/dashboard_view' component={View} />
        <Route exact path='/sup_adminremark' component={SupAdminRemark} />
        
    </Switch>
)
export default Router