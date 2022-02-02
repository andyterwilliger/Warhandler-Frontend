import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateArmy from '../pages/CreateArmy';
import CreateShow from '../pages/CreateShow';




function MainCreate(props) {
    
    const [ units, setUnits ] = useState(null);
    const URL = 'https://warhandlerbackend.herokuapp.com/units/';

    const getUnits = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUnits(data);
    };
    const createUnits = async (unit) => {
        // make post request to create people
    await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(unit),
      });

    //   update list of units
    getUnits();
    };
    const updateUnits = async (unit, id) => {
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(unit),
        });
        getUnits();
    }

    const deleteUnits = async id => {
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getUnits();
    }
  
    useEffect(() => getUnits(), []);

    return (
     
            <Switch>
                <Route exact path='/units'>
                     <CreateArmy units={units} createUnits={createUnits} />
                </Route>
                <Route 
                path='/units/:id'
                render={(rp) => (
                    <CreateShow
                    units = {units}
                    updateUnits = {updateUnits}
                    deleteUnits = {deleteUnits}
                     {...rp}
                 />
                )}
             />
             </Switch>
       
     );
 }
 export default MainCreate;
