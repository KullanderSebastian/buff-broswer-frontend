import Collapsible from 'react-collapsible';
import { MdOutlineFiberNew } from "react-icons/md";
import { HiOutlineCurrencyYen } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";

function Skin(props) {
    //console.log(props)
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
                    <div className="stickers">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <img 
                                key={index}
                                src={props.stickerImg}
                            />
                        ))}
                    </div>
                </div>
                <div className="information">
                    <div className="priceTag">
                        {(() => {
                            let icon;

                            if (props.previousListingPrice === "") {
                                icon = <MdOutlineFiberNew />

                                return <p><HiOutlineCurrencyYen />{props.listingPrice} <span>{icon}</span></p>
                            } else if (props.listingPrice != props.previousListingPrice) {
                                const priceChange = props.listingPrice - props.previousListingPrice;
                                const priceChangePercentage = (priceChange / props.previousListingPrice) * 100;
                                let priceChangeElement = "";

                                icon = parseFloat(priceChangePercentage).toFixed(0);

                                if (priceChangePercentage > 0) {
                                    priceChangeElement = <p><HiOutlineCurrencyYen />{props.listingPrice} <span className="increase">+{icon}%</span></p>
                                } else if (priceChangePercentage < 0) {
                                    priceChangeElement = <p><HiOutlineCurrencyYen />{props.listingPrice} <span className="decrease">{icon}%</span></p>
                                }

                                return priceChangeElement
                            } else {
                                return <p><HiOutlineCurrencyYen />{props.listingPrice}</p>
                            }
                        })()}
                    </div>
                    <div className="stickerPercentage">
                        <p>SP: {parseFloat(props.percentagePrice * 100).toFixed(0)}%</p>
                    </div>
                    <Collapsible className="moreInfo" trigger="More Info">
                        <p>Market Price: {props.marketPrice} RMB</p>
                        <p>Market SP: {props.marketSp} RMB</p>
                        <p>Listing SP: {props.listingSp} RMB</p>
                    </Collapsible>
                </div> 
            </div>
        </div>
    );
}

export default Skin;