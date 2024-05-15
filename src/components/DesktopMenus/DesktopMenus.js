import React from "react";
import PropTypes from "prop-types";
import { IoMdArrowDropdown } from "react-icons/io";
import "./DesktopMenus.scss";

const DesktopMenus = ({weapons, activeWeapons, handleWeaponChoice, renderWears, wear, handleWear, stickerData, handleClearStickers, handleStickerType, activeStickers, handleStickerChoice}) => {
    return (
        <div>
            <div className="weapons">
                {weapons.map(weapon => (
                    <p
                    className={activeWeapons.includes(weapon) ? "weaponActive" : ""}
                    key={weapon} 
                    onClick={handleWeaponChoice}>{weapon}
                    </p>
                ))}
            </div>

            <div className="wears">
            {renderWears.map((renderWear) => {
                return <p key={renderWear} className={wear.includes(renderWear) ? "wearActive" : ""} onClick={handleWear}>{renderWear}</p>
            })}
            </div>
            
            <div className="stickers">
                {Object.entries(stickerData).map(([tournament, stickers]) => {
                    return ( 
                    <div className="dropdown" key={tournament} data-tournament={tournament}>
                        <p>{tournament} <IoMdArrowDropdown /></p>
                        <div className="dropdown-content">
                            <ul>
                                <li onClick={handleClearStickers}>Clear stickers</li>
                                <li onClick={handleStickerType}>All (Holo)</li>
                                {tournament == "Cologne 2014" ? "" : <li onClick={handleStickerType}>All (Foil)</li>}
                                <li onClick={handleStickerType}>All Paper</li>
                                {stickers.map(sticker => (
                                    <li
                                        className={activeStickers[tournament].includes(sticker) ? "stickerActive" : ""}
                                        onClick={handleStickerChoice} 
                                        key={`${tournament} | ${sticker}`}>{sticker}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}

DesktopMenus.propTypes = {
    weapons: PropTypes.array.isRequired,
    activeWeapons: PropTypes.array.isRequired,
    handleWeaponChoice: PropTypes.func.isRequired,
    renderWears: PropTypes.array.isRequired,
    wear: PropTypes.array.isRequired,
    handleWear: PropTypes.func.isRequired,
    stickerData: PropTypes.object.isRequired,
    handleClearStickers: PropTypes.func.isRequired,
    handleStickerType: PropTypes.func.isRequired,
    activeStickers: PropTypes.object.isRequired,
    handleStickerChoice: PropTypes.func.isRequired,
};

export default DesktopMenus;