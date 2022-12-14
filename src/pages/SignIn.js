import './SignIn.css'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()

  const joinHandleClick = () => {
    navigate('/signup')
  }

  return (
    <div className="main-containersignin">
      <div>
        <h1>Track your job applications easier</h1>
        <button onClick={joinHandleClick} className="join-btn">
          JOIN HERE
        </button>
      </div>
      <div className="form-container">
        <form>
          <input placeholder="username" />
          <input placeholder="password" />
          <button className="signin-btn">SIGN IN</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
