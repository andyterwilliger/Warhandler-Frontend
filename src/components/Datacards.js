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
                        <th><img src={datacards[1].img} alt={datacards[0].name}/></th>
                        <th>{datacards[0].name}</th>
                        <th>{datacards[1].faction_id}</th>
                        <th>M</th>
                        <th>WS</th>
                        <th>BS</th>
                        <th>S</th>
                        <th>T</th>
                        <th>W</th>
                        <th>A</th>
                        <th>Ld</th>
                        <th>Sv</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{datacards[0].M}</td>
                        <td>{datacards[0].WS}</td>
                        <td>{datacards[0].BS}</td>
                        <td>{datacards[0].S}</td>
                        <td>{datacards[0].T}</td>
                        <td>{datacards[0].W}</td>
                        <td>{datacards[0].A}</td>
                        <td>{datacards[0].Ld}</td>
                        <td>{datacards[0].Sv}</td>
                    </tr>
                    <tr>
                        <td>{datacards[1].role}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return datacards ? loaded() : <h1>Loading...</h1>
}

export default Datacard;
