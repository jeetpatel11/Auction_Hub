import React, { useEffect, useState } from "react";

const Buy = () => {
    const [auctions, setAuctions] = useState([]);
    const [bids, setBids] = useState({});
    const [timeLeft, setTimeLeft] = useState({}); // Store time left for each auction
    const [endedAuctions, setEndedAuctions] = useState(new Set()); // Track ended auctions


    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auctions");
                const data = await response.json();

                if (data.success && Array.isArray(data.auctions)) {
                    setAuctions(data.auctions);
                    const endedAuctionsList = new Set(
                        data.auctions
                            .filter((a) => new Date(a.auctionEndTime) < new Date())
                            .map((a) => a._id)
                    );
                    setEndedAuctions(endedAuctionsList);

                } else {
                    console.error("Invalid API response format:", data);
                }
            } catch (error) {
                console.error("Error fetching auctions:", error);
            }
        };

        fetchAuctions();

        // Update countdown timer every second
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const updatedTime = {};
                auctions.forEach((auction) => {
                    const endTime = new Date(auction.auctionEndTime);
                    const now = new Date();
                    const diff = endTime - now;

                    if (diff <= 0) {
                        updatedTime[auction._id] = "Auction Ended";
                    } else {
                        const hours = Math.floor(diff / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                        updatedTime[auction._id] = `${hours}h ${minutes}m ${seconds}s`;
                    }
                });
                return updatedTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [auctions]);

   
    const handleBidChange = (auctionId, value) => {
        setBids((prevBids) => ({ ...prevBids, [auctionId]: value }));
    };

    const placeBid = async (auctionId, startingBid, highestBid) => {
        const bidAmount = parseFloat(bids[auctionId] || 0);

        if (isNaN(bidAmount) || bidAmount <= highestBid || bidAmount <= startingBid) {
            alert("Bid must be higher than the current highest bid!");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/bid/${auctionId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ bidAmount }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Bid placed successfully!");
                
                // Refresh auctions after bid placement
                setAuctions((prevAuctions) =>
                    prevAuctions.map((auction) =>
                        auction._id === auctionId
                            ? { ...auction, highestBid: bidAmount }
                            : auction
                    )
                );
            } else {
                alert(data.message || "Bid placement failed!");
            }
        } catch (error) {
            console.error("Error placing bid:", error);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" ,paddingLeft:'330px'}}>
            <h2 style={{ textAlign: "center", color: "#333" }}>Live Auctions</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {auctions.length > 0 ? (
                    auctions.map((auction) => {
                        const hasEnded = endedAuctions.has(auction._id); // Check if auction ended
                        return(
                        <div 
                            key={auction._id} 
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "15px",
                                width: "300px",
                                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                                backgroundColor: "#fff"
                            }}
                        >
                            <img 
                                src={`http://localhost:5000${auction.imageUrl}`} 
                                alt={auction.title} 
                                style={{ width: "200px", height: "200px", objectFit: "cover", border: "1px solid #ccc" }} 
                                onError={(e) => { e.target.src = "https://via.placeholder.com/200"; }}
                            />
                            <h3 style={{ color: "#007bff" }}>{auction.title}</h3>
                            <p style={{ color: "#555" }}>{auction.description}</p>
                            <p style={{ fontWeight: "bold", color: "#666" }}>Category: {auction.category}</p>
                            
                            {/* Show Auction End Time */}
                            <p><strong>Ends At:</strong> {new Date(auction.auctionEndTime).toLocaleString()}</p>
                            <p><strong>Time Left:</strong> {timeLeft[auction._id] || "Calculating..."}</p>

                            <p style={{ fontWeight: "bold", color: "#000" }}>Starting Price: ${auction.startingBid}</p>
                            <p style={{ fontWeight: "bold", color: "#ff0000" }}>Highest Bid: ${auction.highestBid || auction.startingBid}</p>

                            {/* Input field for entering bid */}
                            {!hasEnded ? (
                            <>
                            <input 
                                type="number" 
                                placeholder="Enter bid amount"
                                value={bids[auction._id] || ""}
                                onChange={(e) => handleBidChange(auction._id, e.target.value)}
                                style={{ padding: "5px", marginBottom: "10px", width: "100%" }}
                            />
                            
                            <button 
                                style={{
                                    padding: "10px",
                                    backgroundColor: "#28a745",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    width: "100%"
                                }}
                                onClick={() => placeBid(auction._id, auction.startingBid, auction.highestBid || auction.startingBid)}
                            >
                                Place Bid
                            </button>
                            </>
                        ) : (
                                    <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Auction Closed</p>
                                )}
                        </div>
                        )
})
                ) : (
                    <p style={{ textAlign: "center", color: "#888" }}>No auctions available.</p>
                )}
            </div>
        </div>
    );
};

export default Buy;
