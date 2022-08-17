
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form /Form';
import { nanoid } from 'nanoid';

const initialContact = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];


 function App ()  {
  const [contacts, setContacts] = useState('');
  const [filter, setFilter] =useState ('');
  
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
  useEffect(()=> {
    console.log('Ápp componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
  
   
    if (parsedContacts){
      setContacts({ contacts: parsedContacts });
    }
  })
return (
  <>
  <Header title="Phonebook" />
  <Form onSubmit={addContact} />
  <Header title="Contacts" />
  <Filter value={filter} onChange={this.changeFilter} />
  <ContactList
    contacts={this.filterContacts}
    deleteContact={this.deleteContact}
  />
</>
)
}
  

  //const useLocalStorage = (key, defaultValue) => {
    //const [state, setState] = useState(() => {
   //   return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  //  }
  // );
   
 // useEffect(() => {
  //  window.localStorage.setItem(key, JSON.stringify(state));
  //  return () => {}
    
 // }, [key, state]);
  
  
 //  return [state, setState];
 // }
//useEffect(()=> {
 // console.log('Ápp componentDidMount');
  //const contacts = localStorage.getItem('contacts');
  //const parsedContacts = JSON.parse(contacts);

 
  //if (parsedContacts){
   // setContact({ contacts: parsedContacts });
 // }
//})
 

//componentDidUpdate(prevState){
 // console.log('Ápp componentDidUpdate');
 // if (this.state.contacts !== prevState.contacts) {
 //   console.log('Upstate fild contacts');
  //  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
 // }
//};
  //const addContact = (newContact) => {
    // Проверка на дубликат
   // const duplicateName = contacts.find(
   //   (contact) => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
   // );

   // if (duplicateName) {
   //   alert(`${newContact.name} is already on contacts`);
   //   return;
   // }

    //this.setState(({ contacts }) => ({
    //  contacts: [newContact, ...contacts],
  //  }));
 // };

  // Следит за полем фильтрации и пишет в стейт
  //changeFilter = (e) => {
  //  this.setState({ filter: e.currentTarget.value });
 // };

 // filterContacts = () => {
 //   const { contacts, filter } = this.state;
 //   const normalizedFilter = filter.toLowerCase();

  //  return contacts.filter((contact) =>
  //    contact.name.toLowerCase().includes(normalizedFilter)
  //  );
 // };

  // Удаляет контакт
  // deleteContact = (id) => {
    //this.setState((prevState) => ({
      //contacts: prevState.contacts.filter((contact) => contact.id !== id),
   // }));
//  };

  
  //    //}
  





export default App;

