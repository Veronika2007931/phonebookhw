
import { Component } from 'react';
import './App.css';

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }



  render(){
    return (
      
       <form >
      <p>Name</p>
        <input 
        
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button type="submit">Add to contacts</button>
       </form>
      
    );
  }
 
}

export default App;
