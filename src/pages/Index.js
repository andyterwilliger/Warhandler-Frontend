import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
    
    const [datasheets, setDatasheets] = useState(null);
    
    const alphaSort = async (array) => {
        await array.sort((a, b) => {
        let x = a.name,
            y = b.name;
        return x == y ? 0 : x > y ? 1 : -1;
        })};

    const getSheets = async () => {
        const response = await fetch(props.URL + 'Datasheets');
        const data = await response.json()
        const res = await fetch(props.URL + 'Factions');
        const info = await res.json()
        alphaSort(data)
        const Factions = info.map((faction) => {
            const facfilter = (fac) => {
                return data.filter(unit => unit.faction_id === fac)}
            return facfilter(faction.id)
        })
        //console.log(Factions)
        const array = info.map((obj) => {
            return Object.entries(obj)
        })
        const filteredarray = array.map((arr) => {
            return arr.filter(([key, value]) => key === "name")
        })
        const factionList = filteredarray.map((arr) => {
            return Object.fromEntries(arr)
        })
        Factions.push(factionList)
        console.log(Factions)
        setDatasheets(Factions);
    }
    useEffect(() => getSheets(), []);

        const Lists =() => {
            const warhandler = []
            for (let i = 0; i < datasheets[29].length; i++) {
                let army = (<div>
                    <div id="faction-name">{datasheets[29][i].name}</div> <br/><br/>
                    <div>{datasheets[i].map((unit) => {
                        return (
                        <div key={unit.id} className="unit-container">
                            <Link to={`/army/${unit.id}`}>
                                <h1 id= 'unit-name'>{unit.name}</h1>
                            </Link>
                        <img src={unit.img} alt="" />
                        </div>)})}</div>
                </div>)
                warhandler.push(army)}
            return warhandler}

    const loaded = () => {
        return (
            <>
                <h1>All Units</h1>
                <section id ="index-section">
                    {Lists()}
                </section>
            </>
    )}

    return datasheets ? loaded() : <h1>Loading...</h1>
}

export default Index;