const SignUp = () => {
  // const [authenticated, toggleAuthenticated] = useState(false)
  // const [user, setUser] = useState(null)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  // }

  return (
    <div>
      <form>
        <input className="name" placeholder="name" />
        <input className="username" placeholder="username" />
        <input className="password" placeholder="password" />
        <input className="confirmpassword" placeholder="confirm password" />
      </form>
    </div>
  )
}

export default SignUp
