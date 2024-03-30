
import { Component } from 'react';
import {Contacts} from "./Components/Contacts"
import './App.css';

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }

 AddContact =(event)=>{
  event.preventDefault()
  const ev= event.currentTarget.elements.name.value
  const newContact={
    name:ev
  }



this.setState((prevState)=>{
 return{
   contacts: [newContact, ...prevState.contacts ]
  }
})
 }


  render(){
    return (
      <>
       <form>
      <p>Name</p>
        <input 
        
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={this.state.name}
/>
<button type="submit">Add to contacts</button>
       </form>

       <Contacts/>
       </>
    );
  }
 
}

export default App;
