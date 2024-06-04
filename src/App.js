//Standard Imports & Dependencies
import React from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Imports of components for initial user interaction 
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Landing from './components/LandingPage/LandingPage';

// Imports for MAIN MENU components
import Dashboard from './components/Dashboard/Dashboard';
import JobsListings from './components/JobListings/JobsListings'
import TrainingCourses from './components/TrainingCourses/TrainingCourses'
import WorkPrograms from './components/WorkPrograms/WorkPrograms';
import FinancialAid from './components/FinancialAid/FinancialAid'

// Imports for ACCOUNT components
import Support from './components/Support/Support'
import Settings from './components/Settings/Settings'

// Launching Soon information page for the users once they land
import Waiting from './components/Waiting/Waiting'

// Custom 404 Page
import PageNotFound from './components/PageNotFound/PageNotFound';
import Logout from './components/Logout/Logout';

//React App initialization
function App() {
  return (
    <>
    <ToastContainer/>
        <Router>
          <Routes>
            {/* Routes for initial user interaction */}
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Home' element={<Landing />} />
            <Route path="/Logout" element= {<Logout/>} />
            {/* Routes for MAIN MENU components */}
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/JobListings' element={<JobsListings />} />
            <Route path='/TrainingCourses' element={<TrainingCourses />} />
            <Route path='/WorkPrograms' element={<WorkPrograms />} />
            <Route path='/FinancialAid' element={<FinancialAid />} />

            {/* Routes for ACCOUNT components */}
            <Route path='/Support' element={<Support/>} />
            <Route path='/Settings' element={<Settings/>} />

            

            {/* Custom 404 Page  */}
            <Route path='*' element={<PageNotFound />} />
            
            {/* Temporary LAUNCHIN SOON active component */}
            <Route index element={<Waiting />} />
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