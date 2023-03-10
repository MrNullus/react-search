import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import './App.css';
import { Users } from '../users';

/*
*BASIC SEARCH
*/
function App() {
   const [query, setQuery] = useState("");
   return (
     <div className="app">
       <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />

    <table summary="Users" cellSpacing="23" cellPadding="5">
      <caption>Users</caption>
      <thead>
        <tr>
          <th scope="col"># ID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
    
      <tbody>
         {Users.filter((user) =>
           user.first_name.toLowerCase().includes(query)
         ).map((item) => (
             <tr>
                <td>{ item.id }</td>
                <td>{ item.first_name }</td>
                <td>{ item.last_name }</td>
                <td>{ item.email }</td>
              </tr>
         ))}
      </tbody>
       </table>
     </div>
   );
}

/*
* SEARCH ON A DATATABLE
*/
// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }

/*
* API SEARCH

function App() {
  const [ error, setError ] = useState({ truth: false, title: '', msg: '' });
  const [ query, setQuery ] = useState("");
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://vercel.com/msnullus/react-search-2hsj:3001/api/users?q=${query}`);
        setData(response.data);
      } catch (err) {
        setError({ 
          truth: true, 
          title: "Deu ruim!!!!", 
          msg: "Erro na requisi????o dos usuarios..." 
        });
        console.log(err);
      }
    };

    if (query.length === 0 || query.length >= 1) fetchData();
  }, [query]);

  // if (error.truth) {
  //   return (
  //     <div className="App">
  //       <h1>{ error.title }</h1>
  //       <h3>{ error.msg }</h3>
  //     </div>
  //   );
  // }

  return (
    <div className="app">
      <header>
        <h1>React Search</h1>
        <p>
          Nesse projeto coloco em pratica formas de fazer pesquisas com React.
        </p>
      </header>

      <input 
        type="search" 
        className="search"
        placeholder="Search...."
        onChange={({ target }) => setQuery(target.value.toLowerCase())}
      />

      <Table data={ data } />
    </div>
  );
}
*/

export default App;
