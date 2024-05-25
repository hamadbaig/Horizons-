import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, NavLink } from "react-router-dom"
import axios from "axios";
import { useAuth } from "../context/AuthContext"
import "./Login.css"

const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })

  const auth = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/api/users/login", formInput)
    toast.success(`Bonjour ${res.data.username}! Vous allez être redirigé.`)
    auth.login(res.data)
    setTimeout(() => {
      navigate("/")
    }, 1000)
  } catch (e) {
    toast.error(e.response.data.message)
  }
}


  return (
    <>
      <article className="body-login container">
        <div className="wrapper-login">
          <form onSubmit={handleSubmit} className="form-login" action="#">
            <h2>Login</h2>
            <div className="input-field-login">
              <input
                type="text"
                onChange={handleChange}
                value={formInput.email}
                name="email"
                required />
              <label htmlFor="email">Entrez votre adresse e-mail</label>
            </div>
            <div className="input-field-login">
              <input
                onChange={handleChange}
                value={formInput.password}
                type="password"
                name="password"
                required />
              <label htmlFor="password">Entrez votre mot de passe</label>
            </div>
            <div className="forget-password">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Souvenez-vous de moi</p>
              </label>
              <NavLink to="/forgot-password">Mot de passe oublié?</NavLink>
            </div>
            <button className="btn-login" type="submit">S'identifier</button>
            <div className="register-login">
              <p>Vous n’avez pas de compte ? <NavLink to="/register">S'inscrire</NavLink></p>
            </div>
          </form>
        </div>
      </article>
      
    </>
  )
}
export default Login;
