import React, { useState } from "react";

const Pendingapplicants = (props)=>{
    const ApplicantsData = props.props
    
    const [applicants, setApplicants] = useState(ApplicantsData)
    
    const updateVarification = (index, isVarified)=>{
        const update = [...applicants]
        update[index].isVarified = !isVarified
        setApplicants(update)

        let Api = `http://localhost:3200/advocate/verify/${userId}`;
        let data = fetch(Api, {
          method: "PATCH",
        });
        data = data.json();
        if (data.status == "error" || data.status == "fail") {
          alertMsg("error while varifying", "error");
        } else {
          alertMsg("successfully done!");
        }

    }
    return(
        
        <div className="advocate-container">

            {ApplicantsData.map((el, i)=>{
                return(
                    <div className="advocate-list">
                        <div className="profile-pic">
                            <img src={el.picture} alt="" />
                        </div>
                        <div className="advocate-name">
                            <h2 className="title">{el.name}</h2>
                        </div>
                        <div className="advocate-title">
                            <h3 className="job-title">{el.role_title}</h3>
                        </div>
                        <div className="advocate-pricing">
                            <p className="pricing">₹{el.pricing}</p>
                        </div>
                        <div className="advocate-doc">
                            <a className="document" href={el.document} target={"_blank"}>View Document</a>
                        </div>

                        
                        <div className="varification">
                            
                            <div className="checkbox-con">
                                <input id="checkbox" type="checkbox" checked={el.isVarified} onChange={()=> updateVarification(i, el.isVarified)} />
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className="advocate-list">
                <div className="profile-pic">
                    <img src="https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </div>
                <div className="advocate-name">
                    <h2 className="title">Gauhar</h2>
                </div>
                <div className="advocate-title">
                    <h3 className="job-title">Advocate</h3>
                </div>
                <div className="advocate-doc">
                    <a className="document" href="https://images.pexels.com/photos/15557806/pexels-photo-15557806.jpeg?auto=compress&cs=tinysrgb&w=800" target={"_blank"}>View Document</a>
                </div>
                <div className="varification">
                    <div className="checkbox-con">
                     <input id="checkbox" type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Pendingapplicants}