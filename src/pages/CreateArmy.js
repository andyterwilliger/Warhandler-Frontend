
import { useState } from 'react';
import { Link } from 'react-router-dom'



function CreateArmy(props) {
<div className='CreateArmy'></div>

// useState to hold the form data

const [ newForm, setNewForm ] = useState({
    Name: "",
    Movement: "",
    WeaponSkill: "",
    BallisticSkill: "",
    Strength: "",
    Toughness: "",
    Wounds: "",
    Attacks: "",
    Leadership: "",
    Save: "",
    
});

// handleChange function for form
const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
};

// handleSubmit function for form
const handleSubmit = (event) => {
    event.preventDefault();
    props.createUnits(newForm);
    setNewForm({
    Name: "",
    Movement: "",
    WeaponSkill: "",
    BallisticSkill: "",
    Strength: "",
    Toughness: "",
    Wounds: "",
    Attacks: "",
    Leadership: "",
    Save: "",
    
    });
};
const loaded = () => {
  return props.units.map(unit => (
      <div key={unit._id} className="unit">
          <Link to={`/units/${unit._id}`}><h1>{unit.Name}</h1></Link>
          
      </div>
  ));
};

const loading = () => {
  return <h1>Loading...</h1>;
};


return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.Name}
          name="Name"
          placeholder="Unit Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Movement}
          name="Movement"
          placeholder="Movement"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.WeaponSkill}
          name="WeaponSkill"
          placeholder="Weapon Skill"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.BallisticSkill}
          name="BallisticSkill"
          placeholder="Ballistic Skill"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Strength}
          name="Strength"
          placeholder="Strength"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Toughness}
          name="Toughness"
          placeholder="Toughness"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Wounds}
          name="Wounds"
          placeholder="Wounds"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Attacks}
          name="Attacks"
          placeholder="Attacks"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Leadership}
          name="Leadership"
          placeholder="Leadership"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.Save}
          name="Save"
          placeholder="Save"
          onChange={handleChange}
        />
        <input type="submit" value="Create Army Unit" />
      </form>
    {props.units ? loaded() : loading()}
    </section>
  );
}

export default CreateArmy;