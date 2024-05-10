import React, { useState, useEffect, useRef, useCallback } from "react";
import buffBrowserIcon from "../../img/Browser.png";
import { useAuth } from "../../context/AuthContext";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import MobileCollapsibleMenus from "../MobileCollapsibleMenus/MobileCollapsibleMenus";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Navbar from "../Navbar/Navbar";
import DesktopMenus from "../DesktopMenus/DesktopMenus";
import "./Nav.scss";

//data for autocompleting search and handling stickers selection
import { autoCompleteData } from "../../data/autoCompleteData";
import { stickerData } from "../../data/stickerData";

function Nav({ activeWeapons, setActiveWeapons, activeStickers, setActiveStickers, wear, handleWear }) {
    const resizeElementRef = useRef(null);
    const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
    const [inputValue, setInputValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn } = useAuth();
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, () => setIsOpen(false));

    const weapons = ["Ak-47", "M4a4", "M4a1-s", "AWP", "Desert Eagle", "Usp-s", "Glock", "P2000"];

    const renderWears = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    const filterData = (input) => {
        setIsOpen(true);
        return autoCompleteData.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        setFilteredData(inputValue ? filterData(inputValue) : []);
    };

    const handleItemSelection = useCallback((item) => {
        setInputValue(item);
        setFilteredData([])

        //Had to use direct DOM manipulation even though it is not recommend with react, was the only way to get the focus to work. Will have to do for now. 
        document.querySelector('input[type="text"]').focus();
        //inputRef.current.focus();
    }, []);

    const toggleArrayItem = (array, item) => {
        return array.includes(item) ? array.filter(i => i !== item) : [...array, item];
    };
 
    const handleWeaponChoice = useCallback((e, searchParam) => {
        let weapon = searchParam ?? e.target.innerHTML;

        if (searchParam != null) {
            if (searchParam === "") {
                setActiveWeapons([]);
                return;
            } else {
                setActiveWeapons([]);
                weapon = searchParam;
            }
        } else {
            setInputValue("");
            weapon = e.target.innerHTML;
        }

        setActiveWeapons(prevWeapons => toggleArrayItem(prevWeapons, weapon));
    }, [setActiveWeapons, setInputValue]);

    const updateActiveStickers = useCallback((tournament, updateFn) => {
        setActiveStickers(prevStickers => {
            const updatedStickers = updateFn(prevStickers[tournament]);
            return { ...prevStickers, [tournament]: updatedStickers };
        });
    }, [setActiveStickers]);
    
    const handleStickerChoice = useCallback((e) => {
        const sticker = e.target.innerHTML;
        const tournament = e.currentTarget.closest("[data-tournament]").getAttribute("data-tournament");

        updateActiveStickers(tournament, stickers => toggleArrayItem(stickers, sticker));
    }, [updateActiveStickers]);

    const handleStickerType = useCallback((e) => {
        const stickerType = e.target.innerHTML.split(" ")[1];
        console.log("stickerType: ", stickerType);
        const tournament = e.currentTarget.closest("[data-tournament]")?.getAttribute("data-tournament");

        updateActiveStickers(tournament, stickers => {
            return stickerData[tournament].filter(sticker => {
                const matchesType = sticker.includes(stickerType) || (stickerType === "Paper" && !sticker.includes("(Holo)") && !sticker.includes("(Foil)"));
                console.log("matchesType: ", matchesType);
                return matchesType ? !stickers.includes(sticker) : stickers.includes(sticker);
            });
        });
    }, [updateActiveStickers]);

    const handleClearStickers = useCallback((e) => {
        const tournament = e.currentTarget.closest("[data-tournament]").getAttribute("data-tournament");

        updateActiveStickers(tournament, () => []);
    }, [updateActiveStickers]);

    useEffect(() => {
        resizeElementRef.current = document.getElementById('Nav');
        const element = resizeElementRef.current;

        if (!element) {
            return;
        }

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setElementSize({ width, height });
            };
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        //console.log("width: " + elementSize.width + " height: " + elementSize.height)

        document.getElementById('skinItems').style.paddingTop = elementSize["height"] + "px";
    }, [elementSize]);

    useEffect(() => {
        document.body.classList.toggle("noScroll", open);
    }, [open])

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(inputValue)
        handleWeaponChoice("", inputValue)

        if (open) {
            setOpen(!open);
        }
    }

    const navigateToHome = () => {
        window.location.href = 'http://localhost:3000/';
    };

    const handleHamburger = (e) => {
        e.preventDefault();

        setOpen(!open);
    }

    return (
        <div>
            <div className="Nav" id="Nav">
                <Navbar 
                    navigateToHome={navigateToHome}
                    buffBrowserIcon={buffBrowserIcon}
                    onSubmit={onSubmit}
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    inputRef={inputRef}
                    wrapperRef={wrapperRef}
                    isOpen={isOpen}
                    filteredData={filteredData}
                    isLoggedIn={isLoggedIn}
                    handleItemSelection={handleItemSelection}
                />
                
                <DesktopMenus 
                    weapons={weapons}
                    activeWeapons={activeWeapons}
                    handleWeaponChoice={handleWeaponChoice}
                    renderWears={renderWears}
                    wear={wear}
                    handleWear={handleWear}
                    stickerData={stickerData}
                    handleClearStickers={handleClearStickers}
                    handleStickerType={handleStickerType}
                    activeStickers={activeStickers}
                    handleStickerChoice={handleStickerChoice}
                />

                <div className="mobileMenu">
                    <HamburgerMenu 
                        navigateToHome={navigateToHome}
                        buffBrowserIcon={buffBrowserIcon}
                        open={open}
                        handleHamburger={handleHamburger}
                        onSubmit={onSubmit}
                        inputValue={inputValue}
                        handleInputChange={handleInputChange}
                        inputRef={inputRef}
                        isLoggedIn={isLoggedIn}
                    />

                    <MobileCollapsibleMenus
                        weapons={weapons}
                        activeWeapons={activeWeapons}
                        handleWeaponChoice={handleWeaponChoice}
                        wears={renderWears}
                        wear={wear}
                        handleWear={handleWear}
                        handleStickerType={handleStickerType}
                        handleStickerChoice={handleStickerChoice}
                        stickerData={stickerData}
                        activeStickers={activeStickers}
                        handleClearStickers={handleClearStickers}
                    />
                </div>
            </div>

        </div>   
    );
  }
  
  export default Nav;