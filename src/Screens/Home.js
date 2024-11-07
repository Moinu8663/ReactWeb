import React, { useState, useEffect } from 'react';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://localhost:7192/api/graphql/UserDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            {
              usersDetails {
                empCode
                firstName
                lastName
                mobileNo
                emailId
                dob
                address
                department
                jobTitle
                company
                companyAddress
                companyImage
                grade
              }
            }
            `,
          }),
        });

        const { data, errors } = await response.json();

        if (errors) {
          setError(errors);
        } else {
          setUsers(data.usersDetails); // Fix: use `data.usersDetails` here
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    <h2>Users</h2>
    <table className="table table-bordered border-dark table-hover">
      <thead>
        <tr>
          <th className='bg-dark text-white text-center'>Emp Code</th>
          <th className='bg-dark text-white text-center'>First Name</th>
          <th className='bg-dark text-white text-center'>Last Name</th>
          <th className='bg-dark text-white text-center'>Mobile No</th>
          <th className='bg-dark text-white text-center'>Email ID</th>
          <th className='bg-dark text-white text-center'>DOB</th>
          <th className='bg-dark text-white text-center'>Address</th>
          <th className='bg-dark text-white text-center'>Department</th>
          <th className='bg-dark text-white text-center'>Job Title</th>
          <th className='bg-dark text-white text-center'>Company</th>
          <th className='bg-dark text-white text-center'>Company Address</th>
          <th className='bg-dark text-white text-center'>Grade</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.empCode}>
            <td>{user.empCode}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.mobileNo}</td>
            <td>{user.emailId}</td>
            <td>{user.dob}</td>
            <td>{user.address}</td>
            <td>{user.department}</td>
            <td>{user.jobTitle}</td>
            <td>{user.company}</td>
            <td>{user.companyAddress}</td>
            <td>{user.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Home;
