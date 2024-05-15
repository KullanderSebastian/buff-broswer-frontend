import React from "react";
import PropTypes from "prop-types";

const WatchlistItem = ({ itemName, wear, stickerName, onRemove }) => {
    return (
        <div className="watchlistItem">
            <p>{`${itemName} (${wear}) | 4x ${stickerName}`}</p>
            <div className="removeButton"><button className="btn" onClick={onRemove}>Remove</button></div>
        </div>
    );
};

WatchlistItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    wear: PropTypes.string.isRequired,
    stickerName: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default WatchlistItem;