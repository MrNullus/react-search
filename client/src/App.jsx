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
       <ul className="list">
         {Users.filter((asd) =>
           asd.first_name.toLowerCase().includes(query)
         ).map((user) => (
           <li className="listItem" key={user.id}>
             {user.first_name}
           </li>
         ))}
       </ul>
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
          msg: "Erro na requisição dos usuarios..." 
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
