import { useState, useEffect } from "react";

export const useSkinsData = (activeWeapons, activeStickers, wear) => {
    const [skins, setSkins] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

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

            if (data["data"].length === 0) {
                setSkins([]);
                setHasMore(false);
                return;
            }

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

    return { skins, hasMore, fetchMoreData };
}