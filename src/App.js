import { useState } from "react";
import Nav from "./components/Nav/Nav";
import SkinsList from "./components/SkinList/SkinsList";
import { useSkinsData } from "./hooks/useSkinsData";

function App() {
	const [activeWeapons, setActiveWeapons] = useState([]);
	const [wear, setWear] = useState([]);
	const [activeStickers, setActiveStickers] = useState({
		"Katowice 2014": [],
		"Cologne 2014": [],
		"DreamHack 2014": [],
		"Katowice 2015": []
	});

	const { skins, hasMore, fetchMoreData } = useSkinsData(activeWeapons, activeStickers, wear);

	const handleWear = (e) => {
		const weaponWear = e.target.innerHTML;

		if (!wear.includes(weaponWear)) {
			setWear(prevWear => [...prevWear, weaponWear]);
		} else if (wear.includes(weaponWear)) {
			let newWear = [...wear];

			newWear = newWear.filter(existingWear => existingWear !== weaponWear);

			setWear(newWear);
		}
	}

	return (
		<div className="App">
			<Nav 
				activeWeapons={activeWeapons} 
				setActiveWeapons={setActiveWeapons}
				activeStickers={activeStickers} 
				setActiveStickers={setActiveStickers}
				wear={wear}
				handleWear={handleWear}
			/>

			<SkinsList skins={skins} fetchMoreData={fetchMoreData} hasMore={hasMore} />
		</div>
	);
}

export default App;