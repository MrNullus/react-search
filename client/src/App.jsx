import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import './App.css';
import { Users } from './users';

function App() {
  const [ error, setError ] = useState({ truth: false, title: '', msg: '' });
  const [ query, setQuery ] = useState("");
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://localhost:5000/api/users?q=${query}`);
        setData(response.data);
      } catch (err) {
        setError({ 
          truth: true, 
          title: "Deu ruim!!!!", 
          msg: "Erro na requisição dos usuarios..." 
        });
        console.log(err);
      }
    };

    if (query.length === 0 || query.length > 2) {
      fetchUsers();
    }
  }, []);

  const search = ( data ) => {
    return (
      data.filter(( item ) => {
        item.first_name.includes(query) ||
        item.last_name.includes(query)  ||
        item.email.includes(query)
      });
    );
  };

  if (error.truth) {
    return (
      <div className="App">
        <h1>{ error.title }</h1>
        <h3>{ error.msg }</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <input 
        type="search" 
        className="search"
        placeholder="Search...."
        onChnage={({ target }) => setQuery(target.value.toLowerCase())}
      />

      <Table 
        data={ [] } />
    </div>
  );
}

export default App;
