import {useEffect, useState} from 'react';

function Datacard(props) {
    const [datacards, setDatacards] = useState(null);

    const getSheets = async() =>{
        const response = await fetch(props.URL + "DatasheetsModels");
        const image = await fetch(props.URL + "Datasheets");
        const data = await response.json()
        const datasheet = await image.json()
        const info = await data.filter(unit => unit.datasheet_id === props.match.params.symbol); 
        const unitImage = await datasheet.filter(unit => unit.id === props.match.params.symbol);
        info.push(unitImage[0]);
        setDatacards(info);
    }
    useEffect(() => getSheets(), []);

    const loaded = () =>{
        return (
            <table> 
                <thead> 
                    <tr> 
                        <th class= 'header'><img src={datacards[1].img} alt={datacards[0].name}/></th> 
                        <th class= 'header'>{datacards[0].name}</th> 
                        <th class= 'header'>Faction: {datacards[1].faction_id}</th>
                        <th class= 'header'> Role: {datacards[1].role}   </th>
                        <th>Movement:  {datacards[0].M} </th>
                        <th>Weapon Skill: {datacards[0].WS}</th>
                        <th>Ballistic Skill: {datacards[0].BS}</th>
                        <th>Strength: {datacards[0].S}</th>
                        <th>Toughness: {datacards[0].T}</th>
                        <th>Wounds: {datacards[0].W}</th>
                        <th>Armor: {datacards[0].A}</th>
                        <th>Leadership: {datacards[0].Ld}</th>
                        <th>Save: {datacards[0].Sv}</th> 
                    </tr>
                </thead> <br/>
                
            </table>
        )
    }

    return datacards ? loaded() : <h1>Loading...</h1>
}

export default Datacard;
