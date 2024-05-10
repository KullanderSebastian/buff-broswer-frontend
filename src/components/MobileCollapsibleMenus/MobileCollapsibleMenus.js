import React from "react";
import CustomCollapsible from "../CustomCollapsible/CustomCollapsible";
import "./MobileCollapsibleMenus.scss";

const DropdownMenu = ({
    weapons,
    activeWeapons,
    handleWeaponChoice,
    wears,
    wear,
    handleWear,
    activeStickers,
    handleStickerChoice,
    handleClearStickers,
    stickerData,
    handleStickerType
}) => {
    const weaponsContent = (
        weapons.map(weapon => (
            <p
            className={activeWeapons.includes(weapon) ? "weaponActiveMobile" : ""}
            key={weapon}
            onClick={handleWeaponChoice}
            >
                {weapon}
            </p>
        ))
    );

    const wearContent = (
        wears.map((renderWear) => {
            return <p className={wear.includes(renderWear) ? "wearActiveMobile" : ""} onClick={handleWear}>{renderWear}</p>
        })
    );

    const stickerRenderOptions = {
        "Katowice 2014": ["(Holo)", "(Foil)", "Paper"],
        "Cologne 2014": ["(Holo)", "Paper"],
        "Dreamhack 2014": ["(Holo)", "(Foil)", "Paper"],
        "Katowice 2015": ["(Holo)", "(Foil)", "Paper"]
    }

    return (
        <div>
            <CustomCollapsible triggerName="Weapons" content={weaponsContent} weapons={weapons}/>
            <CustomCollapsible triggerName="Wear" content={wearContent} wears={wears}/>
            {Object.keys(stickerRenderOptions).map((key) => {
                return (
                    <CustomCollapsible triggerName={key} content={
                        <div className="mobileMenuGrid">
                        <ul data-tournament={key}>
                            <li onClick={handleClearStickers}>Clear stickers</li>
                            {stickerRenderOptions[key].map((stickerType) => {
                                return (
                                    <li key={stickerType} onClick={handleStickerType}>{`All ${stickerType}`}</li>
                                );
                            })}
                        {stickerData[key].map(sticker => {
                        return (
                            <li
                                className={activeStickers[key].includes(sticker) ? "stickerActive" : ""}
                                onClick={handleStickerChoice} 
                                key={`${key} | ${sticker}`}>{sticker}
                            </li>
                        )
                        })}
                        </ul>
                    </div>
                    }/>
                );
            })}
        </div>
    );
};

export default DropdownMenu;