export const fetchSkins = async ({ currentPage, stickers, activeWeapons, wear }) => {
    const url = `https://backend.buffbrowser.com:8080/skin/getskins?page=${currentPage}&limit=20`;

    const searchParameters = [];

    if (activeWeapons.length > 0) {
        if (wear.length > 0) {
            activeWeapons.forEach(weapon => {
                wear.forEach(wearCondition => {
                    searchParameters.push(`${weapon} ${wearCondition}`);
                });
            });
        } else {
            searchParameters.push(...activeWeapons)
        }
    } else if (wear.length > 0) {
        searchParameters.push(...wear);
    }

    const body_object = {
        sticker_name: stickers.flat(),
        search_parameters: searchParameters
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body_object)
    });

    if (!response.ok) throw new Error("Failed to fetch skins");

    return await response.json();
}
