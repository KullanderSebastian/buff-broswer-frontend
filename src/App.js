import { useEffect, useState, useRef } from "react";
import Nav from "./components/Nav";
import Skin from "./components/Skin";
import stickers from "./stickerUrls.json";
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const initialRender = useRef(true);

  const [activeWeapons, setActiveWeapons] = useState([]);
  const [wear, setWear] = useState([]);
  const [activeStickers, setActiveStickers] = useState({
    "Katowice 2014": [],
    "Cologne 2014": [],
    "Dreamhack 2014": [],
    "Katowice 2015": []
  });

  const [ skins, setSkins ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ hasMore, setHasMore ] = useState(true);

  const renderWears = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

  const fetchMoreData = async (operation) => {
    try {
      let currentPage = page;

      if (operation === "pageOne") {
        currentPage = 1;
        setPage(1);
      } else if (operation === "increment") {
        currentPage = page + 1;
        setPage(prevPage => prevPage + 1);
      }

      const url = `http://localhost:8080/skin/getskins?page=${currentPage}&limit=20`;
      const stickers = [];
      
      Object.keys(activeStickers).map(key => {
        activeStickers[key].map(sticker => {
          stickers.push(`${sticker} | ${key}`);
        })
      });

      let body_object = {
        "sticker_name": stickers
      };

      if (activeWeapons.length > 0) {
        if (wear.length > 0) {
          const combinations = [];
          for (const weapon of activeWeapons) {
            for (const wearCondition of wear) {
              combinations.push(`${weapon} ${wearCondition}`);
            }
          }
          body_object["search_parameters"] = combinations;
        } else {
          body_object["search_parameters"] = activeWeapons;
        }
      } else if (wear.length > 0) {
        body_object["search_parameters"] = wear;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify(body_object)
      });

      const data = await response.json();
      
      const totalPages = data["meta"]["totalPages"];
      const fetchedPage  = data["meta"]["currentPage"];

      console.log(data["data"])

      if (fetchedPage  <= totalPages) {
        if (operation === "pageOne") {
          setSkins(data["data"]);
          setHasMore(true);
          window.scrollTo({ top: 0, left: 0})
        } else {
          setSkins(prevSkins => [...prevSkins, ...data["data"]]);
        }
      } else {
        setHasMore(false);
      }
      
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    const operation = "pageOne";

    if (initialRender.current) {
      fetchMoreData(operation);
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const operation = "pageOne";

    fetchMoreData(operation);
  }, [activeWeapons, activeStickers, wear])

  const handleWear = (e) => {
    const weaponWear = e.target.innerHTML;

    if(!wear.includes(weaponWear)) {
      setWear(prevWear => [...prevWear, weaponWear]);
    } else if (wear.includes(weaponWear)) {
      let newWear = [...wear];

      newWear = newWear.filter(existingWear => existingWear !== weaponWear);

      setWear(newWear);
    }
  }


  return (
    <div className="App">
      <Nav 
        activeWeapons={activeWeapons} 
        setActiveWeapons={setActiveWeapons}
        activeStickers={activeStickers} 
        setActiveStickers={setActiveStickers}
        wear={wear}
        setWear={setWear}
      />

      {skins ? 
        <div className="skinItems" id="skinItems">

          <ul className="wear">
          {renderWears.map((renderWear) => {
            return <li className={wear.includes(renderWear) ? "wearActive" : ""} onClick={handleWear}>{renderWear}</li>
          })}
          </ul>

          <InfiniteScroll
            dataLength={skins.length}
            next={() => fetchMoreData("increment")}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p>
              </p>
            }>
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
          {hasMore ? "" : <p style={{textAlign: "center"}}>You have seen it all!</p>}
        </div>
      : ""}
      
    </div>
  );
}

export default App;