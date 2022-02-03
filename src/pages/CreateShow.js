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
          <h1>Name: {unit.Name}</h1>
          <h2>Movement - {unit.Movement}</h2>
          <h2>Weapon Skill - {unit.WeaponSkill}</h2>
          <h2>Ballistic Skill - {unit.BallisticSkill}</h2>
          <h2>Strength - {unit.Strength}</h2>
          <h2>Toughness - {unit.Toughness}</h2>
          <h2>Wounds - {unit.Wounds}</h2>
          <h2>Attacks - {unit.Attacks}</h2>
          <h2>Leadership - {unit.Leadership}</h2>
          <h2>Save - {unit.Save}</h2>

          <form id = 'create-show-form'onSubmit={handleSubmit}>
            <input
                 type="text"
                 value={editForm.Name}
                 name="Name"
                 placeholder="Name"
                 onChange={handleChange} 
               /> <br/>
               <input
                 type="text"
                 value={editForm.Movement}
                 name="Movement"
                 placeholder="Movement"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.WeaponSkill}
                 name="WeaponSkill"
                 placeholder="Weapon Skill"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.BallisticSkill}
                 name="BallisticSkill"
                 placeholder="Ballistic Skill"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Strength}
                 name="Strength"
                 placeholder="Strength"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Toughness}
                 name="Toughness"
                 placeholder="Toughness"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Wounds}
                 name="Wounds"
                 placeholder="Wounds"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Attacks}
                 name="Attacks"
                 placeholder="Attacks"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Leadership}
                 name="Leadership"
                 placeholder="Leadership"
                 onChange={handleChange}
               /><br/>
               <input
                 type="text"
                 value={editForm.Save}
                 name="Save"
                 placeholder="Save"
                 onChange={handleChange}
               /><br/>
               <input id="submit"type="submit" value="Update Unit" />
        </form>
        <button id='delete' onClick={removeUnit}>
              DELETE UNIT
          </button>
      </div>
    );
  }
  
  export default CreateShow;