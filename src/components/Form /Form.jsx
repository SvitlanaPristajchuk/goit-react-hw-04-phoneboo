import { useState, useEffect } from "react";
import s from "./Form.module.css";



const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  }
 );
 
useEffect(() => {
  window.localStorage.setItem(key, JSON.stringify(state));
  return () => {}
  
}, [key, state]);


 return [state, setState];
}



function Form (onSubmit) {
const [name, setName ] = useLocalStorage('name', '');
const [number, setNumber] = useLocalStorage('number', '')


//const handleChangeName = (e) => {
  //  setName( e.currentTarget.value );
 // };

 //const  handleChangeNumber = (e) => {
  //  setNumber( e.currentTarget.value );
  //};

 const  handleSubmit = e => {
    e.preventDefault();
     onSubmit =({ name, number });
     resetForm();
  };


  const resetForm = () => {
  setName('')
  setNumber('')
  }

const  handleChange = e => {
  const { name, value } = e.currentTarget;

  switch (name) {
    case 'name' :
      setName(value);
      break;

      case 'number' : 
      setNumber (value);
      break;

      default:
        return;
  }



    return (
        <form className ={s.form} onSubmit={handleSubmit} autoComplete= "off">
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
           id={id}
            value={name}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label>Number</label>
        </div>
        <div>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={id}
            value={number}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label>
            <button className={s.button} type="submit" >
              add Contact {}
            </button>
          </label>
        </div>
      </form>
    )
    }
  }
export default Form;