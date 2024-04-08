//Standard Imports & Dependencies
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Landing from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/PageNotFound/PageNotFound';



//React App initialization
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Landing />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='*' element={<PageNotFound />} />
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