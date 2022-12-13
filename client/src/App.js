import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import CreateJob from './pages/CreateJob'
import SignUp from './pages/SignUp'
import EditPage from './pages/EditPage'
import SignIn from './pages/SignIn'
import JobCard from './components/JobCard'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate('/')
  }
  return (
    <div>
      <div className="header-container">
        <div className="user-name" onClick={handleClick}>
          MARI
        </div>
        <div className="signout-btn">SIGN OUT</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobDetails/:id" element={<JobDetails />} />
        <Route path="/createJob" element={<CreateJob />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editpage/:id" element={<EditPage />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
