import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <p>Hello</p> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/createPage" element={<CreatePage />} />
        <Route path="/editPage" element={<JobDetails />} />
        <Route path="/jobDetails/:id" element={<SignUpPage />} />
        <Route path="/signUp" element={<EditPage />} /> */}
      </Routes>
    </div>
  )
}

export default App
