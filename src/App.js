import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Skin from "./components/Skin";
import stickers from "./stickerUrls.json";

function App() {
  const [ skins, setSkins ] = useState();

  useEffect(() => {
    const url = "http://localhost:8080/getskins?page=1&limit=20";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST"
        });
        const json = await response.json();
        
        setSkins(json);
      } catch(error) {
        console.log(error);
      }
    };

    fetchData()
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="skinItems">
      {skins ? skins["data"].map((skin) => {
        return <Skin 
          skinName={skin["item_name"]}
          skinImg={skin["item_img"]}
          stickerImg={stickers[skin["sticker_name"]]}
          marketPrice={skin["market_price"]}
          listingPrice={skin["seller_price"]}
          marketSp={skin["sticker_price"]}
          listingSp={skin["sticker_seller_price"]}
          percentagePrice={skin["sticker_percentage_price"]}
        />
      }) : ""}
      </div>
    </div>
  );
}

export default App;