import { useState } from 'react'

function CreateShow(props) {
    <div className='CreateShow'></div>
    const id = props.match.params.id;
    const units = props.units;
    
    const unit = units.find(p => p._id === id);

    // state for form
    const [ editForm, setEditForm ] = useState(unit);

    // handleChange function for form
    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value });
    }

    // handleSubmit for form
    const handleSubmit = event => {
        event.preventDefault();
        props.updateUnits(editForm, unit._id);
        props.history.push('/');
    }

    const removeUnit = () => {
        props.deleteUnits(unit._id);
        props.history.push('/');
    }
    return (
        <div className="unit">
          <h1>{unit.Name}</h1>
          <h2>{unit.Movement}</h2>
          <h2>{unit.WeaponSkill}</h2>
          <h2>{unit.BallisticSkill}</h2>
          <h2>{unit.Strength}</h2>
          <h2>{unit.Toughness}</h2>
          <h2>{unit.Wounds}</h2>
          <h2>{unit.Attacks}</h2>
          <h2>{unit.Leadership}</h2>
          <h2>{unit.Save}</h2>
          
           <button id='delete' onClick={removeUnit}>
              DELETE
          </button>

          <form onSubmit={handleSubmit}>
            <input
                 type="text"
                 value={editForm.Name}
                 name="Name"
                 placeholder="Name"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Movement}
                 name="Movement"
                 placeholder="Movement"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.WeaponSkill}
                 name="WeaponSkill"
                 placeholder="Weapon Skill"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.BallisticSkill}
                 name="BallisticSkill"
                 placeholder="Ballistic Skill"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Strength}
                 name="Strength"
                 placeholder="Strength"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Toughness}
                 name="Toughness"
                 placeholder="Toughness"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Wounds}
                 name="Wounds"
                 placeholder="Wounds"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Attacks}
                 name="Attacks"
                 placeholder="Attacks"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Leadership}
                 name="Leadership"
                 placeholder="Leadership"
                 onChange={handleChange}
               />
               <input
                 type="text"
                 value={editForm.Save}
                 name="Save"
                 placeholder="Save"
                 onChange={handleChange}
               />
               <input type="submit" value="Update Unit" />
        </form>
      </div>
    );
  }
  
  export default CreateShow;