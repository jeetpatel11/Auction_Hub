import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



function Signup()
{
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    });
//     const [profileImage, setProfileImage] = useState(null);

// const [profileImagePreview, setProfileImagePreview] = useState("");



const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
   
};



 
// const imageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setProfileImagePreview(reader.result);
//       setProfileImage(file);
//     };
//   };



// const handleFileChange = (e) => {
//     setProfileImage(e.target.files[0]);
// };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
    

    try {

        
        const response = await axios.post("http://localhost:5000/signup", data);
        console.log(response.data);
        alert(response.data.message);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            password: ""
        });
        navigate("/login");
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while registering. Please try again.');
    }
};



    return(
        <>
    <form style={{paddingLeft:'320px'}} onSubmit={handleSubmit}>
            <div style={{maxWidth:'600px',maxHeight:'800px',border:'1px solid',margin:'50px auto',borderRadius:'20px','--clr-oran':'#d6482b','--clr-grey':'#57534e'}}>
                    
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1 style={{fontFamily:'cursive',color:'var(--clr-oran)',margin:'20px'}}>Sign up</h1>
                </div>

                    <h3 style={{fontFamily:'cursive',color:'black',margin:'20px'}}>PersonalInfo</h3>



                    {/* <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                    <div style={{display:'flex',width:'400px'}}>
                        <label style={{fontFamily:'cursive',color:'var(--clr-grey)'}}>Profile Image</label>
                        <img src={ 
                            profileImagePreview
                      ? profileImagePreview
                      : "/imageHolder.jpg"} style={{width:'3.5rem',height:'3.5rem',borderRadius:'999px',border:'none',fontSize:'16px',backgroundColor:'transparent',borderBottom:'3px solid',borderColor:'var(--clr-grey)',outline:'none',outlineOffset:'2px'}}/>
                        <input type="file" style={{fontFamily:'cursive',marginTop:'20px',marginLeft:'10px'}} required onChange={imageHandler} />
                    </div>
                </div> */}




                <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <label style={{fontFamily:'cursive',color:'var(--clr-grey)'}}>Full Name</label>
                        <input type="text" 
                         name="fullName"
                         value={formData.fullName}

                         onChange={handleInputChange}
                         
                        required style={{fontFamily:'cursive',width:'400px',border:'none',fontSize:'16px',fontFamily:'cursive',backgroundColor:'transparent',borderBottom:'3px solid',borderColor:'var(--clr-grey)',outline:'none',outlineOffset:'2px'}}/>
                    </div>
                </div>

                <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <label style={{fontFamily:'cursive',color:'var(--clr-grey)'}}>Email </label>
                        <input type="text" 
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                        required style={{width:'400px',fontFamily:'cursive',border:'none',fontSize:'16px',backgroundColor:'transparent',borderBottom:'3px solid',borderColor:'var(--clr-grey)',outline:'none',outlineOffset:'2px'}}/>
                    </div>
                </div>


                <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <label style={{fontFamily:'cursive',color:'var(--clr-grey)'}}>Phone</label>
                        <input type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required style={{fontFamily:'cursive',width:'400px',border:'none',fontSize:'16px',backgroundColor:'transparent',borderBottom:'3px solid',borderColor:'var(--clr-grey)',outline:'none',outlineOffset:'2px'}}/>
                    </div>
                </div>


                <div style={{display:'flex',justifyContent:'center',margin:'20px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <label style={{fontFamily:'cursive',color:'var(--clr-grey)'}}>Password</label>
                        <input type="password" 
                         name="password"
                         value={formData.password}
                         onChange={handleInputChange}
                        required style={{fontFamily:'cursive',width:'400px',border:'none',fontSize:'16px',backgroundColor:'transparent',borderBottom:'3px solid',borderColor:'var(--clr-grey)',outline:'none',outlineOffset:'2px'}}/>
                    </div>
                </div>



               





                <button type="submit" style={{margin:'20px',borderRadius:'10px',fontSize:'20px',fontFamily:'sans-serif',width:'560px',height:'50px',fontFamily:'sans-serif',background:'var(--clr-oran)',color:'white',fontWeight:'600',border:'none' }}>Register</button>


                <p style={{display:'flex',justifyContent:'center',fontFamily:'cursive'}}>Already have an account?<Link to="/login" >Sign in</Link></p>

            </div>
            </form>
        </>
    )
}

export default Signup;

