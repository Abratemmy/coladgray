import React from 'react'
import Admininterface from './admin-interface';
import './admin.css';

function Admindashboard() {
    return (
        <Admininterface>
            <div className="admin-header">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">                            
                        <div className="">
                            <div className="card">
                                <div className="card-title">Total Regd employee</div>
                                <div className="card-number">4</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-title">Number of Supervisor</div>
                            <div className="card-number">4</div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-title">Listed Leave</div>
                            <div className="card-number">4</div>
                        </div>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">From (Sup. name)</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Leave type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Sup. Remarks</th>
                            <th scope="col">View $ Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mr Ezzien</td>
                            <td >Ajirebi Emma</td>
                            <td>Paternity leave</td>
                            <td >20-dec 2020-3 jan 2021</td>
                            <td >Approved</td>
                            <td >
                                <button type="button" className="view-button">View</button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </Admininterface>
    )
}

export default Admindashboard




                    // <table className="table table-striped">
                    //     <thead>
                    //         <tr>
                    //             <th scope="col">#</th>
                    //             <th scope="col">Employee Name</th>
                    //             <th scope="col">Leave Type</th>
                    //             <th scope="col">Posting Date</th>
                    //             <th scope="col">Status</th>
                    //             <th scope="col">Action</th>
                    //         </tr>
                    //     </thead>
                       
//                             {posts.map(post=>{
//                                 return(
//                                     <tbody key={post.id}>
//                                         <tr>
//                                             <td>{post.id}</td>
//                                             <td style={{color:'#38bbc8', fontWeight:'bold'}}>{post.EmployeeName} <br />{post.EmpEmailid}</td>
//                                             <td>{post.LeaveType}</td>
//                                             <td>{post.postingDate}</td>
//                                             <td>{post.LeaveStatus}</td>
//                                             <td className="">
//                                                 <NavLink to={``} className="view-button">View</NavLink>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 )
//                             })}
                        
//                         {/* <tbody> */}

//                             {/* <tr>
                                
//                                 <th scope="row">1</th>
//                                 <td>Temitope</td>
//                                 <td>Annual</td>
//                                 <td>2020-10-5</td>
//                                 <td>Approved</td>
//                                 <td>
//                                     <NavLink to='/dashboard_view'>view</NavLink>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <th scope="row">2</th>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>
//                                     <NavLink to='/dashboard_view'>view</NavLink>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <th scope="row">3</th>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>Temitope</td>
//                                 <td>
//                                     <NavLink to='/dashboard_view'>view</NavLink>
//                                 </td>
//                             </tr> */}
//                         {/* </tbody> */}
//                     </table>
//                 </div>
//             </Admininterface>
            
                
        
           
//         </div>

//         )
    
// }

// export default Admindashboard
