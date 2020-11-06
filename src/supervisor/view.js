import React,{useState, useEffect} from 'react'
import leave from '../blog/blog.json';
import Supervisorinterface from './supervisorinterface';

const View=(props) => {
    const [post, setPost] = useState({
        id:"",
        EmployeeName:"",
        Gender:"",
        EmpEmailid:"",
        LeaveType:"",
        postingDate:"",
        LeaveDateStart:"",
        LeaveDateEnd:"",
        LeaveDescription:"",
        LeaveStatus:"",
        AdminRemark:"",
        AdminActionDate:""  ,
        Contact:""
        
    });
    const[postId, setPostId] = useState('true');

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = leave.data.find(post=>post.id === postId);
        setPost(post);
        setPostId(postId)
    },[post,props.match.params.postId]);


    const [views, setViews] = useState(false);
    function takeAction(){
      setViews(!views)
    }

    return (
        <Supervisorinterface >
      
            <div className="content-start">
                <div className="maincontentlogin">
                    <h5 className=""> Leave Details</h5>
                    <div className="" style={{marginLeft:'20px', paddingBottom:'40px'}}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="viewdetails-col">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Employee Name: <span>{post.EmployeeName}</span></div>
                                        </div> 
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Emp Id: <span>{post.id}</span></div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Gender: <span>{post.Gender}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second row */}
                            <div className="col-lg-12">
                                <div className="viewdetails-col">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Emp Contact No: <span>{post.Contact}</span></div>
                                        </div> 
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Emp Email Id: <span>{post.EmpEmailid}</span></div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* third row */}
                            <div className="col-lg-12">
                                <div className="viewdetails-col">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Leave Type: <span>{post.Contact}</span></div>
                                        </div> 
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Leave Date: <span>From {post.LeaveDateStart} to {post.LeaveDateEnd}</span></div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12-">
                                            <div className="leavedetails-title">Posting Date: <span>{post.postingDate}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* fourth row */}
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="viewdetails-col">
                                    <div className="leavedetails-title">Posting Date: <span>{post.LeaveDescription}</span></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="viewdetails-col">
                                    <div className="leavedetails-title">Leave status: <span>{post.LeaveStatus}</span></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="viewdetails-col">
                                    <div className="leavedetails-title">Admin Remark: <span>{post.AdminRemark}</span></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="viewdetails-col">
                                    <div className="leavedetails-title">Admin Action taken date: <span>{post.AdminActionDate}</span></div>
                                </div>
                            </div>

                            <div className="">
                            <button type="submit" value="submit" onClick={takeAction} >Take Action</button>
                            {/* <a href="#"onclick></a> */}
                            <div className={views?"show":"no-show"} >
                                <div className="view-takeaction-container">
                                    <h5 className=""> Leave Details</h5>
                                    <form>
                                        <div className="form-group">
                                            <select className="form-control" id="">
                                                <option>Choose your option</option>
                                                <option>Approved</option>
                                                <option>Not approved</option>
                                            </select>
                                        </div>
                                        <div className="inputdiv">
                                            <textarea name="description" id=""cols="10"  rows="1" placeholder="Description" className="textarea input" required=""></textarea>    
                                        </div>
                                            <div className="inputdiv text-right">
                                                <a href={`/supervisordashboard/dashboard_view/${post.id}`} className="nav-button">Submit</a>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </Supervisorinterface>
        
    )
}

export default View
