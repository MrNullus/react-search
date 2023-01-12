import { useState } from 'react';
import Table from './components/Table';
import './App.css';
import { Users } from './users';

function App() {
  const [query, setQuery] = useState("");
  console.log("QUERY ====> ", Users.filter(( user ) => {
    user.first_name.toLowerCase().includes(query);
  }));

  const search = ( data ) => {
    return (
      data.filter(( item ) => {
        item.first_name.includes(query) ||
        item.last_name.includes(query)  ||
        item.email.includes(query)
      });
    );
  };

  return (
    <div className="App">
      <input 
        type="search" 
        className="search"
        placeholder="Search...."
        onChnage={({ target }) => setQuery(target.value.toLowerCase())}
      />

      <Table 
        data={ search(Users) } />
    </div>
  );
}

export default App;
