import React from "react";
import PropTypes from "prop-types";
import Collapsible from 'react-collapsible';
import { HiOutlineCurrencyYen } from "react-icons/hi2";
import "./Skin.scss";

function Skin(props) {
    const {weaponName, condition} = alterProps(props);

    function alterProps(props) {
        const parts = props.skinName.split(" (");
        const weaponName = parts[0];
        const condition = parts[1].replace(")", "");

        return { weaponName, condition }; 
    }

    return (
        <div className="Skin">
            <div className="card">
                <div className="title">
                    <h1>{weaponName}</h1>
                    <h2>{condition}</h2>
                </div>
                <div className="picture">
                    <img src={props.skinImg}/>
                    <div className="cardStickers">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <img 
                                key={index}
                                src={props.stickerImg}
                            />
                        ))}
                    </div>
                </div>
                <div className="information">
                    <div className="inline">
                        <div className="priceTag">
                            <p><HiOutlineCurrencyYen />{Math.ceil(props.listingPrice)}</p>
                        </div>
                        <div className="stickerPercentage">
                            <p>{parseFloat(props.percentagePrice * 100).toFixed(0)}% <i>SP</i></p>
                        </div>
                    </div>
                    <Collapsible className="moreInfo" trigger="More Info">
                        <p>Skin Price: {props.marketPrice} RMB</p>
                        <p>Market SP: {props.marketSp} RMB</p>
                        <p>Listing SP: {props.listingSp} RMB</p>
                    </Collapsible>
                </div> 
            </div>
        </div>
    );
}

Skin.propTypes = {
    skinName: PropTypes.string.isRequired,
    skinImg: PropTypes.string.isRequired,
    stickerImg: PropTypes.string.isRequired,
    listingPrice: PropTypes.number.isRequired,
    percentagePrice: PropTypes.number.isRequired,
    marketPrice: PropTypes.number.isRequired,
    marketSp: PropTypes.number.isRequired,
    listingSp: PropTypes.number.isRequired,
};

export default Skin;