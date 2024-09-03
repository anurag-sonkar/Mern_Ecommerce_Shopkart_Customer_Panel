import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [catchError , setCatchError] = useState("") // backend error
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // Function to validate form fields
 const validateForm = () => {
  const newErrors = {};
  if (!email) {
    newErrors.emailError = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.emailError = "Enter a valid email";
  }

  if (!password) {
    newErrors.passwordError = "Password is required";
  }

  return newErrors;
};

// Apply border styles based on error states
useEffect(() => {
  const emailField = document.querySelector('input[name="email"]');
  const passwordField = document.querySelector('input[name="password"]');
 
  if (emailField) {
    emailField.style.border = error.emailError ? '2px solid crimson' : '';
  }
  if (passwordField) {
    passwordField.style.border = error.passwordError ? '2px solid crimson' : '';
  }
}, [error]);

  const handleLogin = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
  
    try {
      const authPromise = dispatch(login({ email, password })).unwrap();
      toast.promise(
        authPromise, 
        {
          success: "Login Successfully!",
          error: "Login failed!",
        },
        {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
          transition: Bounce,
        }
      );
      
      authPromise.then(async ()=>{
      // Perform post-login actions
      navigate('/');
        
        // set offline image
        const response = await fetch('https://raw.githubusercontent.com/anurag-sonkar/Ecommerce_MERN_Shopkart_admin_panel/main/public/assets/offline.png')
  
        const blob = await response.blob();
        const reader = new FileReader();
  
        reader.onloadend = () => {
          const base64Image = reader.result;
          localStorage.setItem("offline-image", base64Image);
        };
  
        reader.readAsDataURL(blob);
  
        
      })
      
      
    } catch (error) {
      // Handle login errors
      setError({});
      const errorMessage = error?.response?.data?.error || error?.response?.data?.message || "An unexpected error occurred.";
      setCatchError(errorMessage);
  
      //  show error in toast
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Bounce,
      });
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
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error.emailError && <div className={styles.errorMessage}>{error.emailError}</div>} 
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.passwordError && <div className={styles.errorMessage}>{error.passwordError}</div>}
      {catchError && <div className={styles.errorMessage}>{catchError}</div>} 
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
