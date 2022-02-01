import {useEffect, useState} from 'react';

function Datacard(props) {
    const [datacards, setDatacards] = useState(null);

    const getSheets = async() =>{
        const response = await fetch("https://warhandlerbackend.herokuapp.com/DatasheetsModels");
        const data = await response.json()
        const info = await data.filter(unit => unit.datasheet_id === props.match.params.symbol); 
        setDatacards(info);
    }
    useEffect(() => getSheets(), []);

    const loaded = () =>{
        return (
            <div>
                <div>{datacards[0].name}</div>
                <div>{datacards[0].M}</div>
                <div>{datacards[0].WS}</div>
                <div>{datacards[0].BS}</div>
                <div>{datacards[0].S}</div>
                <div>{datacards[0].T}</div>
                <div>{datacards[0].W}</div>
                <div>{datacards[0].A}</div>
                <div>{datacards[0].Ld}</div>
                <div>{datacards[0].Sv}</div>
            </div>
        )
    }

    return datacards ? loaded() : <h1>Loading...</h1>
}

export default Datacard;