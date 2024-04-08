import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/Register/Register'
import Landing from './components/landingPage/landingPage'
import Dashboard from './components/Dashboard/Dashboard';
import Error404 from './components/ErrorHandler/errorHandler'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/land' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/errorHandler' element={<Error404 />} />
          <Route index element={<Landing />} />
        </Routes>
      </Router>
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