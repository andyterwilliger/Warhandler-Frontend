import { useEffect, useState } from 'react';

function Index(props) {

    const [datasheets, setDatasheets] = useState(null);

    const getSheets = async () => {
        const response = await fetch(props.URL + 'Datasheets');
        const data = await response.json()
        setDatasheets(data);
        console.log(data)
    }

    useEffect(() => getSheets(), []);

    const loaded = () => {
        
        return (
        <section>
        {datasheets.map((unit) => (
          
              
            <div className="unit-container">
                <h1>{unit.name}</h1>
                <img src={unit.img} alt="" />


            </div>
        ))}
       </section>
    )}
    

    return datasheets ? loaded() : <h1>Loading...</h1>
}

export default Index;