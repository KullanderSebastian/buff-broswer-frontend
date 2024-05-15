import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import fetchWithTokenRefresh from "../../utils/fetchWithTokenRefresh";
import "./SkinWatchlistForm.scss";
import { skinItems } from "../../data/skinItems.js";
import { stickerData } from "../../data/stickerData.js";

const SkinWatchlistForm = ({ onAddToWatchlistState, onCloseModal }) => {
    //handles weapon inputs
    const [weaponType, setWeaponType] = useState("AK-47");
    const [skinName, setskinName] = useState();
    const [wear, setWear] = useState("Factory New")
    const [isFinalInput, setIsFinalInput] = useState(false);
    const [isStattrak, setIsStattrak] = useState(false);

    //handles sticker input
    const [stickerTournament, setStickerTournament] = useState("Katowice 2014");
    const [stickerName, setStickerName] = useState();
    const [isFinalStickerInput, setIsFinalStickerInput] = useState(false);

    const [filteredSkinNameData, setfilteredSkinNameData] = useState([]);
    const [filteredStickerNameData, setFilteredStickerNameData] = useState([]);
    

    const resetInputs = () => {
        setWeaponType("AK-47");
        setskinName("");
        setWear("Factory New");
        setStickerTournament("Katowice 2014");
        setStickerName("");
        setIsFinalInput(false);
    }

    const filterSkinNameData = (weaponType, input) => {
        let availableWeaponSkins = [];

        for (let skin in skinItems[weaponType]["Skins"]) {
            availableWeaponSkins.push(skin);
        }

        return availableWeaponSkins.filter(skin => skin.toLowerCase().includes(input.toLowerCase()));
    }

    const filterStickerNameData = (tournamentName, input) => {
        let availableStickers = [];

        for (let sticker of stickerData[tournamentName]) {
            console.log(sticker);
            availableStickers.push(sticker);
        }

        return availableStickers.filter(sticker => sticker.toLowerCase().includes(input.toLowerCase()));
    }

    const handleInputChange = (event) => {
        const skinName = event.target.value;
        setskinName(skinName);
        setIsFinalInput(false);
        setfilteredSkinNameData(skinName ? filterSkinNameData(weaponType, skinName) : []);
    };

    const handleStickerNameInputChange = (event) => {
        const stickerName = event.target.value;
        setStickerName(stickerName);
        setIsFinalStickerInput(false);
        setFilteredStickerNameData(stickerName ? filterStickerNameData(stickerTournament, stickerName) : []);
    };

    const handleWeaponTypeSelectChange = (event) => {
        const selectValue = event.target.value;
        
        setskinName("");
        setfilteredSkinNameData([]);
        setWear("Factory New");
        setWeaponType(selectValue);
    }

    const handleWearSelectChange = (event) => {
        const selectValue = event.target.value;

        setWear(selectValue);
    }

    const handleIsStattrak = () => {
        setIsStattrak(!isStattrak);
    }

    const handleTournamentSelectChange = (event) => {
        const selectValue = event.target.value;

        setStickerTournament(selectValue);
        setStickerName("");
        setIsFinalStickerInput(false);
        setFilteredStickerNameData([]);
    }

    const handleItemSelection = (item) => {
        setskinName(item);
        setfilteredSkinNameData([]);
        setIsFinalInput(true);
    }

    const handleStickerSelection = (item) => {
        setStickerName(item);
        setFilteredStickerNameData([]);
        setIsFinalStickerInput(true);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const itemName = isStattrak ? `StatTrak™ ${weaponType} | ${skinName}` : `${weaponType} | ${skinName}`;

        const response = await fetchWithTokenRefresh("https://backend.buffbrowser.com/user/additemtowatchlist", {
            method: "POST",
            body: JSON.stringify({
                itemName: itemName,
                wear: wear,
                stickerName: `${stickerName} | ${stickerTournament}`
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        const newItem = {
            itemName: itemName,
            wear: wear,
            stickerName: `${stickerName} | ${stickerTournament}`
        }

        if (response.status === 200) {
            onCloseModal();
            onAddToWatchlistState(newItem);
            resetInputs();
        } else if (response.status === 409) {
            alert("Skin already exists in database or watchlist.");
            resetInputs();
        }
    }

    useEffect(() => {
        if (weaponType && skinName && skinItems[weaponType] && skinItems[weaponType]["Skins"][skinName]) {
            const wears = skinItems[weaponType]["Skins"][skinName];
    
            console.log(wears);
    
            if (wears && wears.length > 0) {
                setWear(wears[0]);
            }
        }
    }, [isFinalInput])

    return (
        <div>
            <form onSubmit={handleSubmit} className="watchlistForm" autoComplete="off">
                <select 
                    className="input-base input-black"
                    name="weaponType"
                    value={weaponType}
                    onChange={handleWeaponTypeSelectChange}
                >
                    <option value="AK-47" selected>AK-47</option>
                    <option value="M4A4">M4A4</option>
                    <option value="M4A1-S">M4A1-S</option>
                    <option value="AWP">AWP</option>
                    <option value="Desert Eagle">Desert Eagle</option>
                    <option value="USP-S">USP-S</option>
                    <option value="Glock-18">GLOCK</option>
                    <option value="P2000">P2000</option>
                </select>

                <input
                    className="input-base input-black"
                    type="text"
                    name="skinName"
                    value={skinName}
                    onChange={handleInputChange}
                    placeholder="Skin name"
                />

                <div className="itemSelection">
                    <ul>
                        {filteredSkinNameData.map(item => (
                            <li key={item} onClick={() => handleItemSelection(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <ul>
                        {filteredStickerNameData.map(item => (
                            <li key={item} onClick={() => handleStickerSelection(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <select
                    className="wearSelect input-base input-black"
                    name="wear"
                    value={wear}
                    onChange={handleWearSelectChange}
                    disabled={!isFinalInput}
                >
                    {weaponType && skinItems[weaponType] && skinItems[weaponType]["Skins"][skinName] ?
                        skinItems[weaponType]["Skins"][skinName].map((wearOption) => (
                            <option key={wearOption} value={wearOption}>{wearOption}</option>
                        )) : ""}
                </select>

                <label>
                    <input
                        type="checkbox"
                        checked={isStattrak}
                        onChange={handleIsStattrak}
                    />
                    StatTrak™?
                </label>

                <select 
                    className="input-base input-black"
                    name="tournament"
                    value={stickerTournament}
                    onChange={handleTournamentSelectChange}
                >
                    <option value="Katowice 2014" selected>Katowice 2014</option>
                    <option value="Cologne 2014">Cologne 2014</option>
                    <option value="DreamHack 2014">DreamHack 2014</option>
                    <option value="Katowice 2015">Katowice 2015</option>
                </select>
                
                <input
                    className="input-base input-black"
                    type="text"
                    name="stickerName"
                    value={stickerName}
                    onChange={handleStickerNameInputChange}
                    placeholder="Sticker name"
                />
                
                <button className="btn" disabled={!isFinalInput || !isFinalStickerInput} type="submit">Add to watchlist</button>
            </form>
        </div>
    );
};

SkinWatchlistForm.propTypes = {
    onAddToWatchlistState: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
};

export default SkinWatchlistForm;
