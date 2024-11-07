import React, { useState } from 'react';

function Services() {
  const [empCode, setEmpCode] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchUsers(empCode); // Fetch users when form is submitted
  };

  const fetchUsers = async (empCode) => {
    const response = await fetch('https://localhost:7192/api/graphql/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            user(empCode: "${empCode}") {
              empCode
              firstName
              lastName
              address
            }
          }
        `,
      }),
    });

    const data = await response.json();
    setUsers(data.data.user ? [data.data.user] : []); // Wrap in array to use map
  };

  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit} className='my-5 mx-5 input-group w-25'  >
          <input
          className="form-control"
            type="text"
            placeholder="Enter Employee Code"
            value={empCode}
            onChange={(e) => setEmpCode(e.target.value)}
            required
          />
        <input className='mx-4 btn btn-primary' type="submit" value="Submit" />
      </form>

      {users.length > 0 && (
        <table className="table table-bordered border-dark table-hover">
          <thead >
            <tr >
              <th className='bg-dark text-white'>Emp Code</th>
              <th className='bg-dark text-white'>First Name</th>
              <th className='bg-dark text-white'>Last Name</th>
              <th className='bg-dark text-white'>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.empCode}>
                <td>{user.empCode}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Services;
