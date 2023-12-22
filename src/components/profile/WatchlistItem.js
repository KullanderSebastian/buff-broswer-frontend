import React from "react";

const WatchlistItem = ({ itemName, wear, stickerName }) => {
    return (
        <div>
            <p>{`${itemName} ${wear} | 4x ${stickerName}`}</p>
        </div>
    );
};

export default WatchlistItem;