import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUser />,
    title: "User Registration",
    description:
      "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
  },
  {
    icon: <FaGavel />,
    title: "Role Selection",
    description:
      'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
  },
  {
    icon: <FaEnvelope />,
    title: "Winning Bid Notification",
    description:
      "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
  },
  {
    icon: <FaDollarSign />,
    title: "Commission Payment",
    description:
      "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Proof of Payment",
    description:
      "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
  },
  {
    icon: <FaRedo />,
    title: "Reposting Items",
    description:
      "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
  },
];

const HowItWorks = () => {
  return (
    <section style={{ maxWidth: "100%",fontFamily:'cursive',height:'fit-content', margin:"0px", paddingLeft: "330px",paddingRight:'20px', display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "center" }}
    >
        
    <h1 style={{ color: "#d6482b", fontSize: "72px", fontWeight: "bold", marginBottom: "8px" }}>Discover How PrimeBid Operates</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "20px",marginBottom:'20px' }}>
      {steps.map((step, index) => (
        <div key={index} style={{ backgroundColor: "#f6f4f0", borderRadius: "10px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", transitionProperty:'all',transitionDuration:'300ms',animationDuration:'300ms', cursor: "pointer" }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "black";e.currentTarget.querySelector('.icon').style.backgroundColor = "#d6482b"}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "#f6f4f0";e.currentTarget.querySelector('.icon').style.backgroundColor = "black"}}>
          <div style={{ backgroundColor: "black", color: "white", padding: "13px",paddingBottom:'11px',width:'fit-content', borderRadius: "100%", fontSize: "24px", transition: "background-color 0.3s" }} className="icon"  >{step.icon}</div>
          <h3 style={{ color: "#D6482B", fontSize: "clamp(1.25rem, 2rem, 3rem)", fontWeight: "600", marginBottom: "10px" }}>{step.title}</h3>
          <p style={{ fontSize: "1.25rem", color: "rgb(115, 115, 115)", transition: "color 0.3s" }} onMouseEnter={(e) => {e.currentTarget.style.color = "white"}} onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(115, 115, 115)")}>{step.description}</p>
        </div>
      ))}
    </div>
  </section>
  );
};

export default HowItWorks;
