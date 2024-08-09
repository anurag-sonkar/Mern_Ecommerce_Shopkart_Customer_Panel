import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  console.log(user)
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      const authPromise =  dispatch(login({ email, password })).unwrap();
      toast.promise(
        authPromise,
        {
          pending: "loging...",
          success: "login Successfully!",
          error: `login failed!`,
        },
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      ).catch((error)=>{
        console.log(error.response.data.error)
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      })

      setError("");
    }
  };

  useEffect(
    ()=>{
      if (user) {
        navigate("/");
      } 
    },[]
  )

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Sign in</h1>
      <input
        type="email"
        className={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
      <Link to="/forgot-password" className={styles.anchor}>
        Forgot your password?
      </Link>
      <button type="button" className={styles.button} onClick={handleLogin}>
        Sign In
      </button>
      <div className="my-4 lg:hidden block">
      <Link to='/signup'>Don't have an account?<span className="text-blue-800 font-semibold px-1">Signup</span></Link>
      </div>
    </form>
  );
}

export default LoginForm;
