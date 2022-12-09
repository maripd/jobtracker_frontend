import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <p>Hello</p> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobDetails" element={<JobDetails />} />
      </Routes>
    </div>
  )
}

export default App

{
  /* <Route path="/createPage" element={<CreatePage />} />
       
        <Route path="/jobDetails/:id" element={<SignUpPage />} />
        <Route path="/signUp" element={<EditPage />} /> */
}
