function Table({ data }) {
  const [query, setQuery] = useState("");
  console.log("QUERY ====> ", Users.filter(( user ) => {
    user.first_name.toLowerCase().includes(query);
  }));

  return (
    <table summary="Users">
      <caption>Users</caption>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
    
      <tbody>
        {
          data.map(( item ) => {
            return (
              <tr>
                <td>{ item.id }</td>
                <td>{ item.first_name }</td>
                <td>{ item.last_name }</td>
                <td>{ item.email }</td>
              </tr> 
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
