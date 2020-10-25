import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Admindashboard from '../admin/admindashboard.js';
import AddDepartment from '../admin/department/addDepartment.js';
import ManageDepartment from '../admin/department/manageDepartment.js';
import Addemployee from '../admin/employeeadmin/addemployee.js';
import Manageemployee from '../admin/employeeadmin/manageemployee.js';
import Addleave from '../admin/Leave/addleave.js';
import Manageleave from '../admin/Leave/manageleave.js';
import View from '../admin/view.js';
import Adminlogin from '../components/adminlogin.js';
import Employeelogin from '../components/employeelogin.js';
import Applyleave from '../employee/applyleave.js';
import Employeeprofile from '../employee/employeeprofiledashboard.js';
import Leavehistory from '../employee/leavehistory.js';


const Router = ()=>(
    <Switch>
        {/* pages */}
        <Route exact path='/coladgray' component={Employeelogin} />
        <Route exact path='/' component={Employeelogin} />
        <Route exact path='/admin_login' component={Adminlogin} />
        <Route exact path='/admin_dashboard' component={Admindashboard} />       
        {/* <Route exact path='/admininterface' component={Admininterface} /> */}
        <Route exact path='/admin_dashboard/dashboard_view/:postId' component={View} />
        <Route  path='/dashboard_view' component={View} />
        <Route exact path='/add_department' component={AddDepartment}/>
        <Route exact path='/manage_department' component={ManageDepartment} />
        <Route exact path='/add_leave' component={Addleave} />
        <Route exact path='/manage_leave' component={Manageleave} />
        <Route exact path='/employee_profile' component={Employeeprofile} />
        <Route exact path='/apply_leave' component={Applyleave} />
        <Route exact path='/leave_history' component={Leavehistory} />
        <Route exact path='/add_employee' component={Addemployee} />
        <Route exact path="/manage_employee" component={Manageemployee} />
        
    </Switch>
)
export default Router