import React, { useEffect, useState } from "react";
import { FaTrophy, FaMedal } from "react-icons/fa"; // 🏆 Import icons

const Leaderboard = () => {
    const [endedAuctions, setEndedAuctions] = useState([]);

    useEffect(() => {
        const fetchEndedAuctions = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auctions");
                const data = await response.json();

                if (data.success && Array.isArray(data.auctions)) {
                    const now = new Date();
                    const ended = data.auctions
                        .filter((auction) => new Date(auction.auctionEndTime) < now && auction.highestBid)
                        .sort((a, b) => b.highestBid - a.highestBid); // Sort by highest bid

                    setEndedAuctions(ended);
                } else {
                    console.error("Invalid API response format:", data);
                }
            } catch (error) {
                console.error("Error fetching auctions:", error);
            }
        };

        fetchEndedAuctions();
    }, []);

    // Function to return ranking icon
    const getRankingIcon = (index) => {
        if (index === 0) return <FaTrophy style={{ color: "#FFD700", fontSize: "1.2rem" }} />; // 🥇 Gold
        if (index === 1) return <FaTrophy style={{ color: "#C0C0C0", fontSize: "1.2rem" }} />; // 🥈 Silver
        if (index === 2) return <FaTrophy style={{ color: "#CD7F32", fontSize: "1.2rem" }} />; // 🥉 Bronze
        return <FaMedal style={{ color: "#8B4513", fontSize: "1rem" }} />; // 🏅 Medal
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif",paddingLeft: "330px" }}>
            <h2 style={{ textAlign: "center", color: "#333" }}>🏆 Auction Leaderboard</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                {endedAuctions.length > 0 ? (
                    <table style={{ width: "80%", borderCollapse: "collapse", marginTop: "20px" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#007bff", color: "#fff", textAlign: "left" }}>
                                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Rank</th>
                                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Auction Title</th>
                                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Highest Bidder</th>
                                <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Winning Bid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {endedAuctions.map((auction, index) => (
                                <tr key={auction._id} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", fontWeight: "bold", textAlign: "center" }}>
                                        {getRankingIcon(index)} {index + 1}
                                    </td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{auction.title}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{auction.highestBidder || "Unknown"}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", fontWeight: "bold", color: "#ff0000" }}>
                                        ${auction.highestBid}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p style={{ textAlign: "center", color: "#888" }}>No completed auctions yet.</p>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;
