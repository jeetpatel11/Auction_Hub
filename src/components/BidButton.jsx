import React, { useState } from "react";

const BidButton = ({ auctionId }) => {
    const [bidAmount, setBidAmount] = useState("");

    const handleBid = async () => {
        if (!bidAmount || isNaN(bidAmount)) {
            alert("Please enter a valid bid amount.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/auctions/${auctionId}/bid`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bidAmount }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Bid placed successfully!");
            } else {
                alert("Bid failed: " + data.message);
            }
        } catch (error) {
            console.error("Error placing bid:", error);
        }
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Enter bid amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
            />
            <button onClick={handleBid}>Place Bid</button>
        </div>
    );
};

export default BidButton;
