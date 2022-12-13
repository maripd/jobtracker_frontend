import './SignIn.css'

const SignIn = () => {
  return (
    <div className="main-containersignin">
      <div>
        <h1>Track your job applications easier</h1>
        <button className="join-btn">JOIN HERE </button>
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
