import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import buffBrowserIcon from "../img/Browser.png";
import Collapsible from 'react-collapsible';

import Login from "../components/profile/Login";
import { useAuth } from "../context/AuthContext";

function Nav({ activeWeapons, setActiveWeapons, activeStickers, setActiveStickers, wear, handleWear }) {
    const resizeElementRef = useRef(null);
    const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
    const [inputValue, setInputValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [open, setOpen] = useState(false);
    const { isLoggedIn } = useAuth();
    const inputRef = useRef(null);

    const autocompleteData = [
        "Steel Delta", "Panthera onca", "Jungle Spray", "First Class", "Jet Set", "Emerald Pinstripe", "Baroque Purple", "Predator", "Safari Mesh", "Wild Lotus",
        "Black Laminate", "Safety Net", "Gold Arabesque", "Green Laminate", "Hydroponic", "X-Ray", "Case Hardened", "Red Laminate", "Fire Serpent", "Blue Laminate",
        "Redline", "Vulcan", "Jaguar", "Wasteland Rebel", "Cartel", "Elite Build", "Aquamarine Revenge", "Frontside Misty", "Point Disarray", "Fuel Injector",
        "Neon Revolution", "Bloodsport", "Orbit Mk01", "The Empress", "Neon Rider", "Asiimov", "Uncharted", "Rat Rod", "Phantom Disruptor", "Legion of Anubis", "Slate",
        "Leet Museo", "Nightwish", "Ice Coaled", "Head Shot", "Eye of Horus", "Jungle Tiger", "Desert Storm", "Tornado", "Modern Hunter", "Radiation Hazard", "Dark Blossom",
        "Urban DDPAT", "Converter", "Mainframe", "Red DDPAT", "The Coalition", "Poseidon", "Daybreak", "Global Offensive", "Faded Zebra", "Zirka", "Desert-Strike",
        "Howl", "Bullet Rain", "Griffin", "龍王 (Dragon King)", "Evil Daimyo", "Royal Paladin", "The Battlestar", "Desolate Space", "Buzz Kill", "Hellfire",
        "Neo-Noir", "Magnesium", "The Emperor", "Tooth Fairy", "Cyber Security", "In Living Color", "Spider Lily", "Poly Mag", "Temukau", "Mud-Spec", "Welcome to the Jungle",
        "Knight", "VariCamo", "Boreal Forest", "Master Piece", "Nitro", "Control Panel", "Fizzy POP", "Imminent Danger", "Hot Rod", "Icarus Fell", "Moss Quartz",
        "Blue Phosphor", "Dark Water", "Bright Water", "Blood Tiger", "Guardian", "Atomic Alloy", "Cyrex", "Basilisk", "Hyper Beast", "Golden Coil", "Chantico's Fire",
        "Mecha Industries", "Flashback", "Decimator", "Briefing", "Leaded Glass", "Nightmare", "Player Two", "Printstream", "Night Terror", "Emphorosaur-S", "Duality",
        "Black Nile", "The Prince", "Dragon Lore", "Pit Viper", "Pink DDPAT", "Acheron", "Desert Hydra", "POP AWP", "Medusa", "Gungnir", "Fade", "Silk Tiger",
        "Lightning Strike", "BOOM", "Graphite", "Electric Hive", "Corticera", "Man-o'-war", "Worm God", "Phobos", "Fever Dream",
        "Oni Taiji", "Mortis", "PAW", "Atheris", "Wildfire", "Containment Breach", "Capillary", "Exoskeleton", "Chromatic Aberration", "Pilot", "Meteorite",
        "Hand Cannon", "Blaze", "Mudder", "Urban Rubble", "Fennec Fox", "Sputnik", "Night", "Midnight Storm", "Sunset Storm 壱", "Sunset Storm 弐",
        "Emerald Jörmungandr", "The Bronze", "Night Heist", "Hypnotic", "Golden Koi", "Cobalt Disruption", "Heirloom", "Conspiracy", "Crimson Web", "Naga", "Bronze Deco",
        "Corinthian", "Kumicho Dragon", "Directive", "Oxide Blaze", "Code Red", "Light Rail", "Blue Ply", "Trigger Discipline", "Ocean Drive",
        "Desert Tactical", "Ancient Visions", "Business Class", "Royal Blue", "Night Ops", "Road Rash", "Forest Leaves", "Check Engine", "Orange Anolis", "Purple DDPAT",
        "Whiteout", "Para Green", "Pathfinder", "Target Acquired", "Overgrowth", "Serum", "Stainless", "Orion", "Caiman",
        "Torque", "Kill Confirmed", "Lead Conduit", "Blueprint", "Cortex", "Monster Mashup", "The Traitor", "Black Lotus",
        "Ticket to Hell", "Ramese's Reach", "Death Rattle", "Reactor", "Brass", "Candy Apple", "Groundwater", "Synth Leaf", "High Beam",
        "Nuclear Garden", "Gamma Doppler", "Red Tire", "Twilight Galaxy", "Sand Dune", "Franklin", "Dragon Tattoo", "Blue Fissure", "Water Elemental",
        "Steel Disruption", "Grinder", "Catacombs", "Bunsen Burner", "Wraiths", "Royal Legion", "Weasel", "Ironwork", "Off World", "Moonrise",
        "Warhawk", "Sacrifice", "Bullet Queen", "Vogue", "Clear Polymer", "Snack Attack", "Winterized", "Umbral Rabbit", "Panther Camo",
        "Coach Class", "Chainmail", "Scorpion", "Amber Fade", "Granite Marbleized", "Grassland Leaves", "Silver", "Grassland", "Space Race", "Dispatch",
        "Ocean Foam", "Red FragCam", "Pulse", "Ivory", "Fire Elemental", "Handgun", "Imperial", "Oceanic", "Imperial Dragon", "Turf", "Woodsman",
        "Urban Hazard", "Obsidian", "Acid Etched", "Gnarled", "Lifted Spirits", "Wicked Sick"
    ]

    const weapons = ["Ak-47", "M4a4", "M4a1-s", "AWP", "Desert Eagle", "Usp-s", "Glock", "P2000"]

    const stickerData = {
        "Katowice 2014": ["ESL Wolf (Foil)","ESL Skull (Foil)","3DMAX (Holo)","Ninjas in Pyjamas (Holo)","Titan (Holo)","Natus Vincere (Holo)","Clan-Mystik (Holo)","mousesports (Holo)","iBUYPOWER (Holo)","Vox Eminor (Holo)","Virtus.Pro (Holo)","Reason Gaming (Holo)","compLexity Gaming (Holo)","Team Dignitas (Holo)","Fnatic (Holo)","HellRaisers (Holo)","Team LDLC.com (Holo)","LGB eSports (Holo)","Vox Eminor","Natus Vincere","LGB eSports","mousesports","Team Dignitas","Virtus.Pro","3DMAX","Clan-Mystik","Fnatic","compLexity Gaming","HellRaisers","Ninjas in Pyjamas","Titan","iBUYPOWER","Reason Gaming","Team LDLC.com"],
        "Cologne 2014": ["Team Dignitas (Holo)","iBUYPOWER (Holo)","dAT team (Holo)","Titan (Holo)","London Conspiracy (Holo)","Team LDLC.com (Holo)","Vox Eminor (Holo)","Cloud9 (Holo)","Natus Vincere (Holo)","Copenhagen Wolves (Holo)","HellRaisers (Holo)","Epsilon eSports (Holo)","MTS GameGod Wolf (Holo)","Virtus.Pro (Holo)","Fnatic (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER","Team Dignitas","Titan","London Conspiracy","Vox Eminor","Team LDLC.com","Cloud9","Natus Vincere","HellRaisers","Epsilon eSports","dAT team","Virtus.Pro","Fnatic","Copenhagen Wolves","Ninjas in Pyjamas","MTS GameGod Wolf"],
        "Dreamhack 2014": ["Team Dignitas (Foil)","Cloud9 (Foil)","Fnatic (Foil)","Natus Vincere (Foil)","DreamHack Winter 2014 (Foil)","Ninjas in Pyjamas (Foil)","Virtus.Pro (Foil)","Team Dignitas (Holo)","Fnatic (Holo)","Cloud9 (Holo)","Virtus.Pro (Holo)","Natus Vincere (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER","Bravado Gaming","Planetkey Dynamics","Team Dignitas","Flipsid3 Tactics","Copenhagen Wolves","Cloud9","HellRaisers","Team LDLC.com","myXMG","ESC Gaming","Ninjas in Pyjamas","PENTA Sports","Fnatic","Virtus.Pro","DreamHack Winter 2014"],
        "Katowice 2015": ["LGB eSports (Foil)","Titan (Foil)","Vox Eminor (Foil)","3DMAX (Foil)","Counter Logic Gaming (Foil)","Cloud9 G2A (Foil)","Flipsid3 Tactics (Foil)","Natus Vincere (Foil)","HellRaisers (Foil)","Fnatic (Foil)","Keyd Stars (Foil)","Virtus.pro (Foil)","Ninjas in Pyjamas (Foil)","Team EnVyUs (Foil)","TSM Kinguin (Foil)","ESL One (Foil)","PENTA Sports (Foil)","Vox Eminor (Holo)","Titan (Holo)","Natus Vincere (Holo)","LGB eSports (Holo)","Cloud9 G2A (Holo)","Counter Logic Gaming (Holo)","Flipsid3 Tactics (Holo)","Virtus.pro (Holo)","Keyd Stars (Holo)","3DMAX (Holo)","HellRaisers (Holo)","Fnatic (Holo)","TSM Kinguin (Holo)","Ninjas in Pyjamas (Holo)","Team EnVyUs (Holo)","PENTA Sports (Holo)","Vox Eminor","LGB eSports","Titan","3DMAX","HellRaisers","Flipsid3 Tactics","Cloud9 G2A","Counter Logic Gaming","Keyd Stars","Natus Vincere","Virtus.pro","Fnatic","Team EnVyUs","TSM Kinguin","Ninjas in Pyjamas","PENTA Sports","ESL One"]
    }

    const renderWears = ["Factory New", "Minimal Wear", "Field-Tested", "Well-Worn", "Battle-Scarred"];

    const filterData = (input) => {
        return autocompleteData.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);

        setFilteredData(inputValue ? filterData(inputValue) : []);
    };

    const handleItemSelection = (item) => {
        setInputValue(item);
        setFilteredData([])

        //Had to use direct DOM manipulation even though it is not recommend with react, was the only way to get the focus to work. Will have to do for now. 
        document.querySelector('input[type="text"]').focus();
        //inputRef.current.focus();
    }
 
    const handleWeaponChoice = (e, searchParam) => {
        let weapon;
        //setActiveWeapons([]);

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

        if (!activeWeapons.includes(weapon)) {
            setActiveWeapons(prevWeapons => [...prevWeapons, weapon]);
        } else if (activeWeapons.includes(weapon)) {
            setActiveWeapons(prevWeapons => prevWeapons.filter(w => w !== weapon));    
        }
    }
    
    const handleStickerChoice = (e) => {
        const sticker = e.target.innerHTML;
        let tournament = e.currentTarget.parentElement.parentElement.parentElement.getAttribute("data-tournament");      
        
        if (!tournament) {
            tournament = e.currentTarget.parentElement.getAttribute("data-tournament");
        }
        
        const newActiveStickers = { ...activeStickers };
        
        if (!activeStickers[tournament].includes(sticker)) {
            newActiveStickers[tournament] = [...newActiveStickers[tournament], sticker];
        } else if (activeStickers[tournament].includes(sticker)) {
            newActiveStickers[tournament] = newActiveStickers[tournament].filter(existingSticker => existingSticker !== sticker);
        }

        setActiveStickers(newActiveStickers);
    }

    const handleStickerType = (e) => {
        const stickerType = e.target.innerHTML.split(" ")[1];
        let tournament = e.currentTarget.parentElement.parentElement.parentElement.getAttribute("data-tournament");
        
        if (!tournament) {
            tournament = e.currentTarget.parentElement.getAttribute("data-tournament")
        }   

        const newActiveStickers = { ...activeStickers };

        stickerData[tournament].map((sticker) => {
            if (sticker.includes(stickerType)) {
                if (!activeStickers[tournament].includes(sticker)) {
                    newActiveStickers[tournament] = [...newActiveStickers[tournament], sticker];
                } else if (activeStickers[tournament].includes(sticker)) {
                    newActiveStickers[tournament] = newActiveStickers[tournament].filter(existingSticker => existingSticker !== sticker);
                }
            } else if (stickerType === "Paper" && !sticker.includes("(Holo)") && !sticker.includes("(Foil)")) {
                if (!activeStickers[tournament].includes(sticker)) {
                    newActiveStickers[tournament] = [...newActiveStickers[tournament], sticker];
                } else if (activeStickers[tournament].includes(sticker)) {
                    newActiveStickers[tournament] = newActiveStickers[tournament].filter(existingSticker => existingSticker !== sticker);
                }
            }

            setActiveStickers(newActiveStickers);
        });
    }

    const handleClearStickers = (e) => {
        let tournament = e.currentTarget.parentElement.parentElement.parentElement.getAttribute("data-tournament");

        if (!tournament) {
            tournament = e.currentTarget.parentElement.getAttribute("data-tournament")
        }   

        const newActiveStickers = { ...activeStickers };

        newActiveStickers[tournament] = [];
        setActiveStickers(newActiveStickers);
    }

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
        if (open) {
            document.body.classList.add("noScroll");
        } else {
            document.body.classList.remove("noScroll");
        }
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

    const createTrigger = (name) => (
        <div>
            {name} <IoMdArrowDropdown className="arrow" />
        </div>
    );
    
    const createTriggerWhenOpen = (name) => (
        <div>
            {name} <IoMdArrowDropup className="arrow" />
        </div>
    );

    const triggerWeapons = createTrigger("Weapons");
    const triggerWeaponsWhenOpen = createTriggerWhenOpen("Weapons");

    const triggerWear = createTrigger("Wear");
    const triggerWearWhenOpen = createTriggerWhenOpen("Wear");

    const triggerKatowice2014 = createTrigger("Katowice 2014");
    const triggerKatowice2014WhenOpen = createTriggerWhenOpen("Katowice 2014");

    const triggerCologne2014 = createTrigger("Cologne 2014");
    const triggerCologne2014WhenOpen = createTriggerWhenOpen("Cologne 2014");

    const triggerDreamHack2014 = createTrigger("DreamHack 2014");
    const triggerDreamHack2014WhenOpen = createTriggerWhenOpen("DreamHack 2014");

    const triggerKatowice2015 = createTrigger("Katowice 2015");
    const triggerKatowice2015WhenOpen = createTriggerWhenOpen("Katowice 2015");

    const handleHamburger = (e) => {
        e.preventDefault();

        setOpen(!open);
    }

    return (
        <div>
            <div className="Nav" id="Nav">
                <div className="searchForm">
                    <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />

                    <div className="searchlogincontainer">
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Fire Serpent"
                                ref={inputRef}
                            />
                            <label for="search" className="searchLabel">Search For Skins</label>
                            <ul>
                                {filteredData.map(item => (
                                    <li key={item} onClick={() => handleItemSelection(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </form>

                        {isLoggedIn ? 
                            <div className="profile"><a href="/profile">Profile</a></div> 
                        :
                            <div className="login">
                                <Login />
                            </div>
                        }
                    </div>
                </div>

                <div className="mobileMenu">
                    <div className="hamburgerContainer">
                        <img onClick={navigateToHome} style={{cursor: 'pointer'}} src={buffBrowserIcon} className="buffBrowserIcon" alt="Website icon" />
                        
                        <div className="hamburgerPlacement">
                            <button className={`hamburger ${open ? "hamburgerOpen" : ""}`} onClick={handleHamburger}>
                                <div />
                                <div />
                                <div />
                            </button>
                        </div>
                        
                        <form className={`hamburgerMenu ${open ? "hamburgerMenuOpen" : "" }`} onSubmit={onSubmit}>
                            <div className="hamburgerSearch">
                              <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Fire Serpent"
                                    ref={inputRef}
                                />
                                <button type="submit">Search</button>
                            </div>
                            
                            {isLoggedIn ? 
                                <div className="profile"><a href="/profile">Profile</a></div> 
                            :
                                <div className="login">
                                    <Login />
                                </div>
                            }
                            
                        </form>
                    </div>
                    <Collapsible className="weaponsMobile" trigger={triggerWeapons} triggerWhenOpen={triggerWeaponsWhenOpen}>
                        {weapons.map(weapon => (
                            <p
                            className={activeWeapons.includes(weapon) ? "weaponActiveMobile" : ""}
                            key={weapon} 
                            onClick={handleWeaponChoice}
                            >
                                {weapon}
                            </p>
                        ))}
                    </Collapsible>
                    <Collapsible className="weaponsMobile" trigger={triggerWear} triggerWhenOpen={triggerWearWhenOpen}>
                    {renderWears.map((renderWear) => {
                        return <p className={wear.includes(renderWear) ? "wearActiveMobile" : ""} onClick={handleWear}>{renderWear}</p>
                    })}
                    </Collapsible>
                    <Collapsible className="weaponsMobile" trigger={triggerKatowice2014} triggerWhenOpen={triggerKatowice2014WhenOpen}>
                        <div className="mobileMenuGrid">
                            <ul data-tournament="Katowice 2014">
                                <li onClick={handleClearStickers}>Clear stickers</li>
                                <li onClick={handleStickerType}>All (Holo)</li>
                                <li onClick={handleStickerType}>All (Foil)</li>
                                <li onClick={handleStickerType}>All Paper</li>
                            {stickerData["Katowice 2014"].map(sticker => {
                            return (
                                <li
                                    className={activeStickers["Katowice 2014"].includes(sticker) ? "stickerActive" : ""}
                                    onClick={handleStickerChoice} 
                                    key={`${"Katowice 2014"} | ${sticker}`}>{sticker}
                                </li>
                            )
                            })}
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible className="weaponsMobile" trigger={triggerCologne2014} triggerWhenOpen={triggerCologne2014WhenOpen}>
                        <div className="mobileMenuGrid">
                            <ul data-tournament="Cologne 2014">
                                <li onClick={handleClearStickers}>Clear stickers</li>
                                <li onClick={handleStickerType}>All (Holo)</li>
                                <li onClick={handleStickerType}>All Paper</li>
                            {stickerData["Cologne 2014"].map(sticker => {
                            return (
                                <li
                                    className={activeStickers["Cologne 2014"].includes(sticker) ? "stickerActive" : ""}
                                    onClick={handleStickerChoice} 
                                    key={`${"Cologne 2014"} | ${sticker}`}>{sticker}
                                </li>
                            )
                            })}
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible className="weaponsMobile" trigger={triggerDreamHack2014} triggerWhenOpen={triggerDreamHack2014WhenOpen}>
                        <div className="mobileMenuGrid">
                            <ul data-tournament="Dreamhack 2014">
                                <li onClick={handleClearStickers}>Clear stickers</li>
                                <li onClick={handleStickerType}>All (Holo)</li>
                                <li onClick={handleStickerType}>All (Foil)</li>
                                <li onClick={handleStickerType}>All Paper</li>
                            {stickerData["Dreamhack 2014"].map(sticker => {
                            return (
                                <li
                                    className={activeStickers["Dreamhack 2014"].includes(sticker) ? "stickerActive" : ""}
                                    onClick={handleStickerChoice} 
                                    key={`${"Dreamhack 2014"} | ${sticker}`}>{sticker}
                                </li>
                            )
                            })}
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible className="weaponsMobile" trigger={triggerKatowice2015} triggerWhenOpen={triggerKatowice2015WhenOpen}>
                        <div className="mobileMenuGrid">
                            <ul data-tournament="Katowice 2015">
                                    <li onClick={handleClearStickers}>Clear stickers</li>
                                    <li onClick={handleStickerType}>All (Holo)</li>
                                    <li onClick={handleStickerType}>All (Foil)</li>
                                    <li onClick={handleStickerType}>All Paper</li>
                                {stickerData["Katowice 2015"].map(sticker => {
                                return (
                                    <li
                                        className={activeStickers["Katowice 2015"].includes(sticker) ? "stickerActive" : ""}
                                        onClick={handleStickerChoice} 
                                        key={`${"Katowice 2015"} | ${sticker}`}>{sticker}
                                    </li>                                )
                                })}
                            </ul>
                        </div>
                    </Collapsible>
                </div>

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
                    return <p className={wear.includes(renderWear) ? "wearActive" : ""} onClick={handleWear}>{renderWear}</p>
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

        </div>   
    );
  }
  
  export default Nav;