import React,{useEffect,useState} from 'react'
import Supervisorinterface from './supervisorinterface';
import {NavLink} from 'react-router-dom';
import leave from '../blog/blog.json'

const Supervisordashboard = () =>{
    const [posts, setPosts] = useState([]);
   

    useEffect(()=>{
        const posts = leave.data;
        setPosts(posts);
    }, [posts]);

    return (
        <Supervisorinterface>
            <div >
            <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Leave Type</th>
                                <th scope="col">Posting Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                       
                            {posts.map(post=>{
                                return(
                                    <tbody key={post.id}>
                                        <tr>
                                            <td>{post.id}</td>
                                            <td style={{color:'#38bbc8', fontWeight:'bold'}}>{post.EmployeeName} <br />{post.EmpEmailid}</td>
                                            <td>{post.LeaveType}</td>
                                            <td>{post.postingDate}</td>
                                            <td>{post.LeaveStatus}</td>
                                            <td className="">
                                                <NavLink to={`/supervisordashboard/dashboard_view/${post.id}`} className="view-button">View</NavLink>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                    </table>
            </div>
        </Supervisorinterface>
    )
}

export default Supervisordashboard
