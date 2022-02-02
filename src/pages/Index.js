import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {

    const [datasheets, setDatasheets] = useState(null);

    const getSheets = async () => {
        const response = await fetch(props.URL + 'Datasheets');
        const data = await response.json()
        data.sort((a, b) => {
            let x = a.name.toUpperCase(),
                y = b.name.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
        });
        setDatasheets(data);
    }

    useEffect(() => getSheets(), []);

    const loaded = () => {
        return (
            <section>
                {datasheets.map((unit) => (
                    <div className="unit-container">
                        <Link key={unit.id} to={`/army/${unit.id}`}>
                            <h1>{unit.name}</h1>
                        </Link>
                        <img src={unit.img} alt="" />
                    </div>
                ))
                }
                
                
            </section>
    )}

    return datasheets ? loaded() : <h1>Loading...</h1>
}

export default Index;