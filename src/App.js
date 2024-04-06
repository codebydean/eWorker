import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
import Login from './login';
import Register from './Register'
import Land from './Land_page'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <Land/>
  );
}

export default App;

/*
<div className="App">
<table>
  <thead>
    <th>Name</th>
    <th>Username</th>
    <th>Password</th>
  </thead>
  <tbody>
    {
      users.map(user => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
</div>
*/