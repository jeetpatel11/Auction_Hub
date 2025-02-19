import React from "react";


function Aboutus()
{
    const values = [
        {
          id: 1,
          title: "Integrity",
          description:
            "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
        },
        {
          id: 2,
          title: "Innovation",
          description:
            "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
        },
        {
          id: 3,
          title: "Community",
          description:
            "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
        },
        {
          id: 4,
          title: "Customer Focus",
          description:
            "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
        },
      ];

      
      return(

        <>
           <section style={{ maxWidth: "100%",fontFamily:'cursive', marginLeft: "5px", margin: "0", height: "fit-content", paddingLeft: "330px", paddingTop: "20px", display: "flex", flexDirection: "column", minHeight: "100vh", paddingBottom: "16px", justifyContent: "center" }}>
  <div>
    <h1 style={{ color: "#d6482b", fontSize: "72px", fontWeight: "bold", marginBottom: "2px" }}>
      About Us
    </h1>
    <p style={{ fontSize: "20px", color: "rgb(115,115,115)" }}>
      Welcome to PrimeBid, the ultimate destination for online auctions and bidding excitement. Founded in 2024, we are dedicated to providing a dynamic and user-friendly platform for buyers and sellers to connect, explore, and transact in a secure and seamless environment.
    </p>
  </div>
  <div>
    <h3 style={{ color: "#111", fontSize: "20px", fontWeight: "semibold", marginBottom: "2px", fontSize: "clamp(xl, 3xl, 3xl)" }}>
      Our Mission
    </h3>
    <p style={{ fontSize: "20px", color: "rgb(115,115,115)" }}>
      At PrimeBid, our mission is to revolutionize the way people buy and sell items online. We strive to create an engaging and trustworthy marketplace that empowers individuals and businesses to discover unique products, make informed decisions, and enjoy the thrill of competitive bidding.
    </p>
  </div>
  <div>
    <h3 style={{ color: "#111", fontSize: "20px", fontWeight: "semibold", marginBottom: "2px", fontSize: "clamp(xl, 3xl, 3xl)" }}>
      Our Values
    </h3>
    <ul style={{ listStyle: "inside" }}>
      {values.map((element) => {
        return (
          <li style={{ fontSize: "20px", color: "rgb(115,115,115)", marginBottom: "2px" }} key={element.id}>
            <span style={{ color: "black", fontWeight: "bold" }}>{element.title}</span>: {element.description}
          </li>
        );
      })}
    </ul>
  </div>
  <div>
    <h3 style={{ color: "#111", fontSize: "20px", fontWeight: "semibold", marginBottom: "2px", fontSize: "clamp(xl, 3xl, 3xl)" }}>
      Our Story
    </h3>
    <p style={{ fontSize: "20px", color: "rgb(115,115,115)" }}>
      Founded by CodeWithZeeshu, PrimeBid was born out of a passion for connecting people with unique and valuable items. With years of experience in the auction industry, our team is committed to creating a platform that offers an unparalleled auction experience for users worldwide.
    </p>
  </div>
  <div>
    <h3 style={{ color: "#111", fontSize: "20px", fontWeight: "semibold", marginBottom: "2px", fontSize: "clamp(xl, 3xl, 3xl)" }}>
      Join Us
    </h3>
    <p style={{ fontSize: "20px", color: "rgb(115,115,115)" }}>
      Whether you're looking to buy, sell, or simply explore, PrimeBid invites you to join our growing community of auction enthusiasts. Discover new opportunities, uncover hidden gems, and experience the thrill of winning your next great find.
    </p>
  </div>
  <div>
    <p style={{ color: "#d6482b", fontSize: "20px", fontWeight: "bold", marginBottom: "3px" }}>
      Thank you for choosing PrimeBid. We look forward to being a part of your auction journey!
    </p>
  </div>
</section>

        </>
      )
}


export default Aboutus;