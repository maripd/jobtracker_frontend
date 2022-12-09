import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import CreateJob from './pages/CreateJob'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <p>Hello</p> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add :id to jobDetails */}
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/createPage" element={<CreateJob />} />
      </Routes>
    </div>
  )
}

export default App

// {
//   <Route path="/createPage" element={<CreateJob />} />

//         <Route path="/jobDetails/:id" element={<SignUpPage />} />
//         <Route path="/signUp" element={<EditPage />} />
// }
