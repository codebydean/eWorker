import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register'
import Landing from './components/landingPage'
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/land' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route index element={<Landing />} />
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