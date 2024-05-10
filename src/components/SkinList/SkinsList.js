import InfiniteScroll from "react-infinite-scroll-component";
import Skin from "../Skin/Skin.js";
import stickers from "../../stickerUrls.json";
import "./SkinList.scss";

const SkinsList = ({ skins, fetchMoreData, hasMore }) => (
    <div className="skinItems" id="skinItems">
        <InfiniteScroll
            dataLength={skins.length}
            next={() => fetchMoreData("increment")}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p></p>}
        >
            {skins.map((skin, index) => {
                return <Skin
                    key={index}
                    skinName={skin["item_name"]}
                    skinImg={skin["item_img"]}
                    stickerImg={stickers[skin["sticker_name"]]}
                    marketPrice={skin["market_price"]}
                    listingPrice={skin["seller_price"]}
                    previousListingPrice={skin["previous_seller_price"]}
                    marketSp={skin["sticker_price"]}
                    listingSp={skin["sticker_seller_price"]}
                    percentagePrice={skin["sticker_percentage_price"]}
                />
            })}
        </InfiniteScroll>
        {hasMore ? "" : <p style={{ textAlign: "center" }}>You have seen it all!</p>}
    </div>
);

export default SkinsList