function Datacards(props) {
    //Find the unit in Datasheets_models.json
    const datacards = fetch("URL from Backend") //Pulls from the datacards_models.json file from backend URL
    function findUnit(unitId, query) {
        return unitId.filter(function(el) {
            return el.indexOf(query)
        }) //
    }
    const data = findUnit(datacards, props.id) 

    //Find the unit in Datasheets_keywords.json
    const keywords = fetch("URL from Backend") //Pulls from the datacards_keywords.json file from backend URL
    function findUnit(unitId, query) {
        return unitId.filter(function(el) {
            return el.indexOf(query)
        }) //
    }
    const keyword = findUnit(keywords, data.datasheet_id) 




    //Note: Need to push id of unit into Datacards component
    //filters through the json array to find the object with the ID of the unit.
    
    return (
        <div>
            <header>
                <div>{data.name}</div>
                <div>{data.M}</div>
                <div>{data.WS}</div>
                <div>{data.BS}</div>
                <div>{data.S}</div>
                <div>{data.T}</div>
                <div>{data.W}</div>
                <div>{data.A}</div>
                <div>{data.Ld}</div>
                <div>{data.Sv}</div>
            </header>
                (keyword.is_faction_keyword===false) ? <div>{keyword.keyword}</div> : {null}

            <div>{data.name} ? loaded() : <h1>Loading...</h1></div>
            <div>{data.name}</div>
            <div>{data.name}</div>
        </div>
    )
}

export default Datacards;