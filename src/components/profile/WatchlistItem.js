import React from "react";

const WatchlistItem = ({ itemName, wear, stickerName, onRemove }) => {
    return (
        <div className="watchlistItem">
            <p>{`${itemName} (${wear}) | 4x ${stickerName}`}</p>
            <div className="removeButton"><button onClick={onRemove}>Remove</button></div>
        </div>
    );
};

export default WatchlistItem;