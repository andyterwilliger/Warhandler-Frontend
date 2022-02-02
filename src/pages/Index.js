import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {

    const [datasheets, setDatasheets] = useState(null);

    const getSheets = async () => {
        const response = await fetch(props.URL + 'Datasheets');
        const data = await response.json()
        setDatasheets(data);
    }

    useEffect(() => getSheets(), []);

    const loaded = () => {
        return (
            <section id ="index-section">
                {datasheets.map((unit) => (
                    <div className="unit-container">
                        <Link key={unit.id} to ={`/army/${unit.id}`}>
                        <h1>{unit.name}</h1>
                        </Link>
                        <img src={unit.img} alt="" />
                    </div>
                ))}
            </section>
    )}

    return datasheets ? loaded() : <h1>Loading...</h1>
}

export default Index;