import React from "react";
import { Link } from "react-router-dom";
function Home()
{


    const howItWorks = [
        { title: "Post Items", description: "Auctioneer posts items for bidding." },
        { title: "Place Bids", description: "Bidders place bids on listed items." },
        {
          title: "Win Notification",
          description: "Highest bidder receives a winning email.",
        },
        {
          title: "Payment & Fees",
          description: "Bidder pays; auctioneer pays 5% fee.",
        },
      ];

    return(
        
        <>
             <section style={{maxwidth:'100%',margin:'0px',height:'fit-content',paddingLeft:"320px",paddingRight:"20px",paddingTop:"80px",
                                
             }}>
                <div >
                    <p style={{color:'#DECCBE',margin:'0px',fontWeight:'bold',fontSize:'20px',marginBottom:'34px',fontFamily:'cursive'}}>Transparency Leads to Your Victory</p>

                    <h1 style={{color:'#111',fontSize:'60px',margin:'0px',fontFamily:'cursive',fontWeight:'bold',marginBottom:'8px'}}>Transparent Auctions</h1>

                    <h1 style={{color:'#d6482b',margin:'0px',fontSize:'60px',fontFamily:'cursive',marginBottom:'8px'}}>Be The Winner</h1>
                    
                    <div style={{display:'flex',gap:'16px',margin:'0px',marginTop:'32px',marginBottom:'32px'}}>
                        
                        <Link to='/login' style={{color:'#DECCBE',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',backgroundColor:'transparent',fontFamily:'cursive',border:'2px solid',borderColor:'#DECCBE',textDecoration:'none',fontWeight:'bold',padding:'20px',fontSize:'20px',borderRadius:'20px',width:'70px',display:'flex',justifyContent:'center'}}
                        onMouseEnter={(e)=>{e.target.style.backgroundColor="#fff3fd";e.target.style.color="#fdba88"}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color="#DECCBE"}} >
                            Login
                        </Link>
                        <Link to='/signup' style={{color:'white',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',fontWeight:'bold',fontFamily:'cursive',backgroundColor:'#d6482b',border:'2px solid',borderColor:'#DECCBE',textDecoration:'none',fontWeight:'bold',padding:'20px',fontSize:'20px',borderRadius:'20px',width:'80px',display:'flex',justifyContent:'center'}}
                        onMouseEnter={(e)=>{e.target.style.backgroundColor="#b8381e";e.target.style.color="white"}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = "#d6482b";e.target.style.color="white"}} >
                            Sign Up
                        </Link>
                        

                        
                    </div>
                </div>


                <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
                    <h3 style={{color:'black',fontSize:'40px',margin:'0px',fontWeight:'bold',marginBottom:'8px',fontFamily:'cursive',lineHeight:'28px'}}>How it Works</h3>
                    
                    <div style={{display:'flex',flexDirection:'row',gap:'10px',flexWrap:'wrap'}}>
                        {howItWorks.map((element)=>{
                            return(
                                <div 
                                key={element.title}
                                style={{backgroundColor:'#f6f4f0',width:'535px',display:'flex',flexDirection:'column',gap:'2px',fontSize:'16px',fontFamily:'cursive',padding:'8px',borderRadius:'2px',flexWrap:'wrap'}}>
                                    <h5 style={{fontWeight:'bold'}}>{element.title}</h5>
                                    <p>{element.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
             </section>
        </>
    )
}

export default Home;