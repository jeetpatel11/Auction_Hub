import React from 'react';

const Card = ({ product }) => {
  const {
    image,
    title,
    category,
    condition,
    startingBid,
    auctionEndingTime,
    description,
  } = product;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '300px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <div style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '1.5em', margin: '0 0 8px 0' }}>{title}</h2>
        <p style={{ margin: '4px 0', fontSize: '0.9em', color: '#555' }}>
          <strong>Category:</strong> {category}
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.9em', color: '#555' }}>
          <strong>Condition:</strong> {condition}
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.9em', color: '#555' }}>
          <strong>Starting Bid:</strong> ${startingBid}
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.9em', color: '#555' }}>
          <strong>Auction Ends:</strong> {auctionEndingTime}
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.9em', color: '#333' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;