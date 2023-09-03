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
                    <p>Market Price: {props.marketPrice} RMB</p>
                    <p>Listing Price: {props.listingPrice} RMB</p>
                    <p>Market SP: {props.marketSp} RMB</p>
                    <p>Listing SP: {props.listingSp} RMB</p>
                    <p>Percentage price: {props.percentagePrice}%</p>
                </div> 
            </div>
        </div>
    );
}

export default Skin;