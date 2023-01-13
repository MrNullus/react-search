function Table({ data }) {
  return (
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
