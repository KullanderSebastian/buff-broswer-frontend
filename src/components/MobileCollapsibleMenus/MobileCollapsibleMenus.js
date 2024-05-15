import React from "react";
import PropTypes from "prop-types";
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
            return <p key={renderWear} className={wear.includes(renderWear) ? "wearActiveMobile" : ""} onClick={handleWear}>{renderWear}</p>
        })
    );

    const stickerRenderOptions = {
        "Katowice 2014": ["(Holo)", "(Foil)", "Paper"],
        "Cologne 2014": ["(Holo)", "Paper"],
        "DreamHack 2014": ["(Holo)", "(Foil)", "Paper"],
        "Katowice 2015": ["(Holo)", "(Foil)", "Paper"]
    }

    return (
        <div>
            <CustomCollapsible triggerName="Weapons" content={weaponsContent} weapons={weapons}/>
            <CustomCollapsible triggerName="Wear" content={wearContent} wears={wears}/>
            {Object.keys(stickerRenderOptions).map((key) => {
                return (
                    <CustomCollapsible triggerName={key} key={key} content={
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

DropdownMenu.propTypes = {
    weapons: PropTypes.array.isRequired,
    activeWeapons: PropTypes.array.isRequired,
    handleWeaponChoice: PropTypes.func.isRequired,
    wears: PropTypes.array.isRequired,
    wear: PropTypes.array.isRequired,
    handleWear: PropTypes.func.isRequired,
    activeStickers: PropTypes.object.isRequired,
    handleStickerChoice: PropTypes.func.isRequired,
    handleClearStickers: PropTypes.func.isRequired,
    stickerData: PropTypes.object.isRequired,
    handleStickerType: PropTypes.func.isRequired
};

export default DropdownMenu;