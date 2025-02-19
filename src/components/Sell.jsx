import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Sell() 
{

    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [condition, setCondition] = useState('');
    const [startingBid, setStartingBid] = useState('');
    const [auctionEndTime, setAuctionEndTime] = useState('');
    const [description, setDescription] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('condition', condition);
      formData.append('startingBid', startingBid);
      formData.append('auctionEndTime', auctionEndTime);
      formData.append('description', description);
      formData.append('image', image);
  
      try {
          const response = await fetch('http://localhost:5000/api/auctions/create-auction', {
              method: 'POST',
              body: formData,
          });
          
          const result = await response.json();
          if (result.success) {
              alert('Auction created successfully!');
          } else {
              alert('Error creating auction');
          }
          navigate('/buy');
      } catch (error) {
          console.error("Error submitting auction:", error);
          alert('An error occurred');
      }
  };
  



    const imageHandler=(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();

        reader.readAsDataURL(file);
        reader.onload=()=>{
            setImage(file);
            setImagePreview(reader.result);

        };
    };

    return(
        <>
            <article style={{maxwidth:'100%',marginLeft:'0px',height:'fit-content',paddingLeft:'320px',paddingTop:'0px',display:'flex',flexDirection:'column',fontFamily:'cursive'}}>

                <h1 style={{color:'#d6482b',fontSize:'60px',fontWeight:'bold',marginBottom:'8px'}}>Create Auction</h1>

                <div style={{width:'98%',height:'auto',paddingLeft:'8px',marginRight:'50px',display:'flex',flexDirection:'column',gap:'16px',alignItems:'center',paddingTop:'16px',paddingBottom:'16px',justifyContent:'center',borderRadius:'2px'}}>

                    <form style={{display:'flex',flexDirection:'column',gap:'10px',width:'100%'}}>
                        <p style={{fontWeight:'bold',fontSize:'20px'}}>Auction Detail</p>

                        <div style={{display:'flex',flexDirection:'row',gap:'20px',}}>
                            <div style={{display:'flex',width:'50%',flexDirection:'column'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Title</label>
                                <input type="text" 
                                value={title} onChange={(e) => setTitle(e.target.value)} required
                                style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'8px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}/>
                            </div>

                        


                            <div style={{display:'flex',width:'50%',flexDirection:'column'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Category</label>
                                <select 
                                value={category} onChange={(e) => setCategory(e.target.value)} required
                                style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'7px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}>

                                    <option value="">Select Category</option>
                                    <option value="Camera">Camera</option>
                                    <option value="used">Used</option>


                                </select>
                            </div>

                        </div>


                        <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                     
                             <div style={{display:'flex',width:'50%',flexDirection:'column'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Condition</label>
                                <select
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)} required
                                style={{fontSize:'16px',paddingTop:'16px',paddingBottom:'8px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}>

                                    <option value="">Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>


                                </select>
                            </div>


                            <div style={{display:'flex',width:'50%',flexDirection:'column',gap:'10px'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Starting Bid</label>
                                <input type="text" 
                                value={startingBid} onChange={(e) => setStartingBid(e.target.value)} required
                                style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'8px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}/>
                            </div>

                        </div>

                        <div style={{display:'flex',flexDirection:'row',gap:'20px',}}>
                            {/* <div style={{display:'flex',width:'50%',flexDirection:'column'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Auction Starting Time</label>
                            
                                <input type="text" style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'8px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}/>
                            </div> */}

                         <div style={{display:'flex',width:'50%',flexDirection:'column'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Auction Ending Time</label>
                            
                                <input type="datetime-local" value={auctionEndTime} onChange={(e) => setAuctionEndTime(e.target.value)} required 
                                style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'8px',backgroundColor:'transparent',border:'0px',borderBottom:'1px solid',borderColor:'#78716c',outline:'none',fontFamily:'cursive'}}/>
                            </div>
                        </div>


                        <div style={{display:'flex',flexDirection:'column',gap:'2px',}}>
                     
                            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                                <label style={{fontSize:'16px',color:'#57534e'}}>Description</label>
                                <textarea 
                                value={description} onChange={(e) => setDescription(e.target.value)} required
                                rows={10} style={{fontSize:'16px',paddingTop:'8px',paddingBottom:'8px',backgroundColor:'transparent',borderRadius:'5px',borderColor:'#78716c',outline:'none',fontFamily:'cursive',borderWidth:'2px'}}/>
                            </div>

                        </div>
                
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <label style={{fontWeight:'bold',fontSize:'20px',}}>
              Auction Item Image
            </label>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
              <label
                for="dropzone-file"
                style={{display:'flex',flexDirection:'column',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',justifyContent:'center',width:'100%',height:'256px',border:'2px',borderColor:'#d1d5db',borderStyle:'dashed',borderRadius:'16px',cursor:'pointer',backgroundColor:'#f9fafb',}}

                onMouseEnter={(e)=>{e.target.style.backgroundColor='#f3f4f6';e.target.style.borderColor='#6b7280';e.currentTarget.querySelector(".innerdiv").style.backgroundColor = "#f3f4f6";
                    e.currentTarget.querySelector(".innerdiv").style.borderColor = "#6b7280";}}
                onMouseLeave={(e)=>{e.target.style.backgroundColor='#f9fafb';e.target.style.borderColor='#d1d5db';
                    e.currentTarget.querySelector(".innerdiv").style.backgroundColor = "#f9fafb";
                    e.currentTarget.querySelector(".innerdiv").style.borderColor = "#d1d5db";
                }}
              >
                <div className="innerdiv"

                style={{display:'flex',height:'auto',marginLeft:'400px',marginRight:'400px',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'24px',marginBottom:'24px'}}>
                  {imagePreview ? (
                    <img src={imagePreview} style={{width:'176px',height:'auto'}}  className="w-44 h-auto"/>
                  ) : (
                    <>
                      <svg
                        style={{width:'32px',height:'32px',marginBottom:'16px',backgroundcolor:'#f9fafb',color:'#6b7280'}}

                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                    </>
                  )}

                  <p style={{marginBottom:'8px',fontSize:'14px',color:'#6b7280'}} >
                    <span style={{fontWeight:'bold'}}>Click to upload</span> or drag
                    and drop
                  </p>
                  <p style={{fontSize:'12px',color:'#6b7280'}}>
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" style={{display:'none'}}
                onChange={(e) => setImage(e.target.files[0])} required 
                />
              </label>
            </div>
        


                        </div>
                <button style={{backgroundColor:'#D6482B',fontWeight:'bold',transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms',fontSize:'20px',padding:'20px',borderRadius:'10px',color:'white',width:'500px',margin:'auto',marginTop:'20px',border:'none'}}
                onMouseEnter={(e)=>{e.target.style.backgroundColor='#b8381e'}}
                onMouseLeave={(e)=>{e.target.style.backgroundColor='#D6482B'}}
                onClick={handleSubmit}
                >Create Auction</button>
                    </form>
                </div>
            </article>
        
        </>
    );
};


export default Sell;