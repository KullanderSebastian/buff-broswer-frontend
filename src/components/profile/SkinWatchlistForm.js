import React, { useState, useEffect } from "react";
import fetchWithTokenRefresh from "../../utils/fetchWithTokenRefresh";

const skinItems = {
    "AK-47": {
        "Skins": {
            "Head Shot": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Nightwish": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Leet Museo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Legion of Anubis": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Asiimov": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Neon Rider": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Empress": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Bloodsport": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Neon Revolution": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fuel Injector": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Aquamarine Revenge": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wasteland Rebel": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Jaguar": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Vulcan": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fire Serpent": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Gold Arabesque": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "X-Ray": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wild Lotus": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Ice Coaled": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Phantom Disruptor": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Point Disarray": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Frontside Misty": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Cartel": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Redline": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Case Hardened": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Red Laminate": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Panthera onca": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hydroponic": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Jet Set": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Slate": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Rat Rod": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Orbit Mk01": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blue Laminate": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Safety Net": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "First Class": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Emerald Pinstripe": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Uncharted": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Elite Build": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Steel Delta": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Green Laminate": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Black Laminate": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Baroque Purple": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Safari Mesh": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Jungle Spray": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Predator": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "M4A4": {
        "Skins": {
            "Howl": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Temukau": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "In Living Color": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Emperor": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Neo-Noir": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Buzz Kill": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Battlestar": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Royal Paladin": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Bullet Rain": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Desert-Strike": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Asiimov": [
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "X-Ray": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Eye of Horus": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Coalition": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Cyber Security": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Tooth Fairy": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hellfire": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Desolate Space": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "龍王 (Dragon King)": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Poseidon": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Spider Lily": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Evil Daimyo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Griffin": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Zirka": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Red DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Daybreak": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Modern Hunter": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Poly Mag": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Magnesium": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Faded Zebra": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Global Offensive": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Converter": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Radiation Hazard": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dark Blossom": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mainframe": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Urban DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Tornado": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Jungle Tiger": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Desert Storm": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "M4A1-S": {
        "Skins": {
            "Printstream": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Player Two": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mecha Industries": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Chantico's Fire": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Golden Coil": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hyper Beast": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Cyrex": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Imminent Danger": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Welcome to the Jungle": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Nightmare": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Leaded Glass": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Decimator": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Atomic Alloy": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Guardian": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blue Phosphor": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Control Panel": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hot Rod": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Master Piece": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Knight": [
                "Factory New",
                "Minimal Wear"
            ],
            "Emphorosaur-S": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Night Terror": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Flashback": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Basilisk": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Bright Water": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dark Water": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Icarus Fell": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Nitro": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Briefing": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blood Tiger": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fizzy POP": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "VariCamo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mud-Spec": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Moss Quartz": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Boreal Forest": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "AWP": {
        "Skins": {
            "Chromatic Aberration": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Containment Breach": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wildfire": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Neo-Noir": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Oni Taiji": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hyper Beast": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Man-o'-war": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Asiimov": [
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Lightning Strike": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Desert Hydra": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fade": [
                "Factory New",
                "Minimal Wear"
            ],
            "Gungnir": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Prince": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Medusa": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dragon Lore": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Duality": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mortis": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fever Dream": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Elite Build": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Corticera": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Redline": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Electric Hive": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Graphite": [
                "Factory New",
                "Minimal Wear"
            ],
            "BOOM": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Silk Tiger": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Exoskeleton": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Atheris": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "PAW": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Phobos": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Worm God": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "POP AWP": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pink DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pit Viper": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Capillary": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Black Nile": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Acheron": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Snake Camo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sun in Leo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Safari Mesh": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "Desert Eagle": {
        "Skins": {
            "Ocean Drive": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Printstream": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Code Red": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Golden Koi": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mecha Industries": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Kumicho Dragon": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Conspiracy": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Cobalt Disruption": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hypnotic": [
                "Factory New",
                "Minimal Wear"
            ],
            "Fennec Fox": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Trigger Discipline": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Light Rail": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Directive": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Naga": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Crimson Web": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Heirloom": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Emerald Jörmungandr": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sunset Storm 壱": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sunset Storm 弐": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Hand Cannon": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pilot": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blaze": [
                "Factory New",
                "Minimal Wear"
            ],
            "Blue Ply": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Oxide Blaze": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Corinthian": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Bronze Deco": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sputnik": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Night Heist": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Meteorite": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Urban Rubble": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Bronze": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Midnight Storm": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Night": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Urban DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Mudder": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "USP-S": {
        "Skins": {
            "Printstream": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "The Traitor": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Neo-Noir": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Kill Confirmed": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Monster Mashup": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Cortex": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Caiman": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn"
            ],
            "Orion": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Serum": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Whiteout": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Target Acquired": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Ticket to Hell": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Flashback": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Cyrex": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Guardian": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Overgrowth": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dark Water": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Orange Anolis": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Ancient Visions": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Road Rash": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Black Lotus": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blueprint": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Lead Conduit": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Torque": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blood Tiger": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Stainless": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Purple DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Check Engine": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Business Class": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Night Ops": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Desert Tactical": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pathfinder": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Para Green": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Royal Blue": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Forest Leaves": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "Glock-18": {
        "Skins": {
            "Neo-Noir": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Bullet Queen": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wasteland Rebel": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Gamma Doppler": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Snack Attack": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Vogue": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Water Elemental": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Twilight Galaxy": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Umbral Rabbit": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Moonrise": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Weasel": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Royal Legion": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Grinder": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Steel Disruption": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dragon Tattoo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Ramese's Reach": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pink DDPAT": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Franklin": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Synth Leaf": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Nuclear Garden": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Brass": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Fade": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Winterized": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Clear Polymer": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sacrifice": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Oxide Blaze": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Warhawk": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Off World": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Ironwork": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wraiths": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Bunsen Burner": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Catacombs": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Blue Fissure": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Reactor": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Candy Apple": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Red Tire": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "High Beam": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Night": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Death Rattle": [
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Groundwater": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Sand Dune": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    },
    "P2000": {
        "Skins": {
            "Fire Elemental": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Wicked Sick": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Imperial Dragon": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Corticera": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Ocean Foam": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Acid Etched": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Obsidian": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Woodsman": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Handgun": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Space Race": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Amber Fade": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Scorpion": [
                "Factory New",
                "Minimal Wear"
            ],
            "Lifted Spirits": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Gnarled": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Urban Hazard": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Turf": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Oceanic": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Imperial": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Ivory": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pulse": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Red FragCam": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Dispatch": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Chainmail": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Silver": [
                "Factory New",
                "Minimal Wear"
            ],
            "Panther Camo": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Pathfinder": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested"
            ],
            "Coach Class": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Grassland": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Granite Marbleized": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ],
            "Grassland Leaves": [
                "Factory New",
                "Minimal Wear",
                "Field-Tested",
                "Well-Worn",
                "Battle-Scarred"
            ]
        }
    }
}

const stickerData = {
    "Katowice 2014": ["ESL Wolf (Foil)","ESL Skull (Foil)","3DMAX (Holo)","Ninjas in Pyjamas (Holo)","Titan (Holo)","Natus Vincere (Holo)","Clan-Mystik (Holo)","mousesports (Holo)","iBUYPOWER (Holo)","Vox Eminor (Holo)","Virtus.Pro (Holo)","Reason Gaming (Holo)","compLexity Gaming (Holo)","Team Dignitas (Holo)","Fnatic (Holo)","HellRaisers (Holo)","Team LDLC.com (Holo)","LGB eSports (Holo)","Vox Eminor","Natus Vincere","LGB eSports","mousesports","Team Dignitas","Virtus.Pro","3DMAX","Clan-Mystik","Fnatic","compLexity Gaming","HellRaisers","Ninjas in Pyjamas","Titan","iBUYPOWER","Reason Gaming","Team LDLC.com"],
    "Cologne 2014": ["Team Dignitas (Holo)","iBUYPOWER (Holo)","dAT team (Holo)","Titan (Holo)","London Conspiracy (Holo)","Team LDLC.com (Holo)","Vox Eminor (Holo)","Cloud9 (Holo)","Natus Vincere (Holo)","Copenhagen Wolves (Holo)","HellRaisers (Holo)","Epsilon eSports (Holo)","MTS GameGod Wolf (Holo)","Virtus.Pro (Holo)","Fnatic (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER","Team Dignitas","Titan","London Conspiracy","Vox Eminor","Team LDLC.com","Cloud9","Natus Vincere","HellRaisers","Epsilon eSports","dAT team","Virtus.Pro","Fnatic","Copenhagen Wolves","Ninjas in Pyjamas","MTS GameGod Wolf"],
    "DreamHack 2014": ["Team Dignitas (Foil)","Cloud9 (Foil)","Fnatic (Foil)","Natus Vincere (Foil)","DreamHack Winter 2014 (Foil)","Ninjas in Pyjamas (Foil)","Virtus.Pro (Foil)","Team Dignitas (Holo)","Fnatic (Holo)","Cloud9 (Holo)","Virtus.Pro (Holo)","Natus Vincere (Holo)","Ninjas in Pyjamas (Holo)","iBUYPOWER","Bravado Gaming","Planetkey Dynamics","Team Dignitas","Flipsid3 Tactics","Copenhagen Wolves","Cloud9","HellRaisers","Team LDLC.com","myXMG","ESC Gaming","Ninjas in Pyjamas","PENTA Sports","Fnatic","Virtus.Pro","DreamHack Winter 2014"],
    "Katowice 2015": ["LGB eSports (Foil)","Titan (Foil)","Vox Eminor (Foil)","3DMAX (Foil)","Counter Logic Gaming (Foil)","Cloud9 G2A (Foil)","Flipsid3 Tactics (Foil)","Natus Vincere (Foil)","HellRaisers (Foil)","Fnatic (Foil)","Keyd Stars (Foil)","Virtus.pro (Foil)","Ninjas in Pyjamas (Foil)","Team EnVyUs (Foil)","TSM Kinguin (Foil)","ESL One (Foil)","PENTA Sports (Foil)","Vox Eminor (Holo)","Titan (Holo)","Natus Vincere (Holo)","LGB eSports (Holo)","Cloud9 G2A (Holo)","Counter Logic Gaming (Holo)","Flipsid3 Tactics (Holo)","Virtus.pro (Holo)","Keyd Stars (Holo)","3DMAX (Holo)","HellRaisers (Holo)","Fnatic (Holo)","TSM Kinguin (Holo)","Ninjas in Pyjamas (Holo)","Team EnVyUs (Holo)","PENTA Sports (Holo)","Vox Eminor","LGB eSports","Titan","3DMAX","HellRaisers","Flipsid3 Tactics","Cloud9 G2A","Counter Logic Gaming","Keyd Stars","Natus Vincere","Virtus.pro","Fnatic","Team EnVyUs","TSM Kinguin","Ninjas in Pyjamas","PENTA Sports","ESL One"]
}

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

        const response = await fetchWithTokenRefresh("http://localhost:8080/user/additemtowatchlist", {
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
                    className="wearSelect"
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
                    type="text"
                    name="stickerName"
                    value={stickerName}
                    onChange={handleStickerNameInputChange}
                    placeholder="Sticker name"
                />
                
                <button disabled={!isFinalInput || !isFinalStickerInput} type="submit">Add to watchlist</button>
            </form>
        </div>
    );
};

export default SkinWatchlistForm;