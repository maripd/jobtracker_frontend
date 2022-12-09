import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import CreateJob from './pages/CreateJob'
import SignUp from './pages/SignUp'
import EditPage from './pages/EditPage'
import SignIn from './pages/SignIn'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <p>Hello</p> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add :id to jobDetails */}
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/createJob" element={<CreateJob />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/editPage" element={<EditPage />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App

// {
//

//<Route path="/jobDetails/:id" element={<SignUpPage />} />
//
// }
