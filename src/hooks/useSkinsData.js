import { useState, useEffect, useRef } from "react";
import { fetchSkins } from "../api/skinService";

export const useSkinsData = (activeWeapons, activeStickers, wear) => {
    const [skins, setSkins] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const initialRender = useRef(true);

    const getStickersArray = () => 
        Object.entries(activeStickers).reduce((acc, [key, stickers]) => 
            acc.concat(stickers.map(sticker => `${sticker} | ${key}`)), []);

    const fetchMoreData = async (operation) => {
        try {
            const currentPage = operation === "increment" ? page + 1 : 1;

            const data = await fetchSkins({
                currentPage,
                stickers: getStickersArray(),
                activeWeapons,
                wear,
            });

            console.log(JSON.stringify(data, null, 2));

            setPage(currentPage);
            handleFetchResponse(data, operation);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleFetchResponse = (response, operation) => {
        const { data, meta } = response;

        if (!data || data.length === 0) {
            setSkins([]);
            setHasMore(false);
            return;
        }

        // Use `operation` to determine how to update state
        if (operation === "pageOne") {
            setSkins(data); // Reset skins list for "page one" operation
        } else {
            setSkins(prevSkins => [...prevSkins, ...data]); // Append skins for "increment" operation
        }

        // Update `hasMore` based on the current page and total pages
        setHasMore(meta.currentPage < meta.totalPages);
    };

    useEffect(() => {
        fetchMoreData("pageOne");
    }, [activeWeapons, activeStickers, wear]);

    return { skins, hasMore, fetchMoreData };
}