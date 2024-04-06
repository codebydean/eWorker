import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './login';
import Register from './Register'
import Land from './Land_page'
import Dashboard from './Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/land' element={<Land />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route index element={<Land />} />
        </Routes>
      </BrowserRouter>
    </>
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