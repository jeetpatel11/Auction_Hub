import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md"; // Leaderboard icon
import { FcAbout } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";
import { RiAuctionFill } from "react-icons/ri";
import { SiAboutdotme, SiGooglesearchconsole } from "react-icons/si";
import { Link } from "react-router-dom";
import Leaderboard from "../Leaderboard";

function Sidebar()
{

    const [show,setshow]=useState(false);


    return(
        <>

        <div style={{width:'300px',backgroundColor:'#f6f4f0',height:'100%',position:'fixed',top:'0px',padding:'8px',display:'flex',flex:'column',justifyContent:'space-between',left:'0px',border:'1px solid',borderRightColor:'#78716c'}}>
            <div style={{position:'relative',width:'100%'}}>

                <Link  to={'/'} style={{border:'0px',textDecorationLine:'none',fontFamily:'cursive'}}>
                    <h4 style={{margin:'0px',fontSize:'30px',lineHeight:'32px',fontWeight:'bold',marginBottom:'6px',color:'black'}}>Auction<span style={{color:'#D6482b'}}>Hub</span></h4>
                </Link>

            <ul style={{listStyleType:'none',fontFamily:'cursive',margin:'0px',padding:'0px'}}>
                <li       onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/buy"} style={{margin:'0px',textDecorationLine:'none',display:'flex',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',fontSize:'26px',lineHeight:'52px',fontWeight:'bold',gap:'8px',marginTop:'20px',alignItems:'center',color:"black"}}
                     >
                        <RiAuctionFill/>Bidding
                       </Link>
 
                </li>

                <li
                onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/sell"} style={{transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',margin:'0px',textDecorationLine:'none',display:'flex',fontSize:'26px',gap:'8px',lineHeight:'52px',fontWeight:'bold',marginTop:'px',alignItems:'center',color:"black"}}
                       >
                        <IoIosCreate/>sell
                       </Link>
 
                </li>


                <li       onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/leaderboard"} style={{margin:'0px',textDecorationLine:'none',display:'flex',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',fontSize:'26px',lineHeight:'52px',fontWeight:'bold',gap:'8px',marginTop:'0px',alignItems:'center',color:"black"}}
                     >
                        <MdLeaderboard/>Leaderboard
                       </Link>
 
                </li>
            </ul>
                
          <hr style={{marginBottom:'5px',borderColor:'#d6482b'}} className="mb-4 border-t-[#d6482b]" />

            <ul style={{listStyleType:'none',fontFamily:'cursive',margin:'0px',padding:'0px'}}>
                <li
                onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/aboutus"} style={{transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',margin:'0px',textDecorationLine:'none',display:'flex',fontSize:'26px',gap:'8px',lineHeight:'52px',fontWeight:'bold',alignItems:'center',color:"black"}}
                       >
                        <BsFillInfoSquareFill/>About Us
                       </Link>
 
                </li>
                
                <li
                onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/howitworks"} style={{transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',margin:'0px',textDecorationLine:'none',display:'flex',fontSize:'26px',gap:'8px',lineHeight:'52px',fontWeight:'bold',alignItems:'center',color:"black"}}
                       >
                        <SiGooglesearchconsole/>How it works
                       </Link>
 
                </li>



                <li  onMouseEnter={(e)=>{e.target.style.color="#D6482b"}}
                       onMouseLeave={(e) => {e.target.style.color="black"}}>
                    <Link to={"/logout"} style={{margin:'0px',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',textDecorationLine:'none',display:'flex',fontSize:'26px',gap:'8px',lineHeight:'52px',fontWeight:'bold',marginTop:'400px',alignItems:'center',color:"black"}}
                       >
                        <BiLogOut/>Logout
                       </Link>
 
                </li>
            </ul>

            


            </div>


        </div>
        </>
    )
}

export default Sidebar;