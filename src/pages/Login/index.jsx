import {Link, useNavigate} from "react-router";
import {Button} from "@mui/material";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/features/auth/AuthSlice.js";

function Login() {
    const [userLogin, setUserLogin] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);

    // tao form su dung formik
    const formLogin = useFormik({
        initialValues: {
            username: "",
            password: ""
        },

        onSubmit: values => {
            console.log(values);
            // xu ly logic login
            const { username, password } = values;
            if (username == 'luanpv' && password == '1234') {
                localStorage.setItem("userLogin", username)
                dispatch(login(username))
                // chuyen trang
                toast.success("Login success");
                navigate("/admin/dashboard");
            }else {
                toast.error("Account not exist");
            }
        }
    })


    return (
        <>
            <h1>Login page</h1>
            <form onSubmit={formLogin.handleSubmit}>
                <label>
                    Username
                    <input type="text" onChange={formLogin.handleChange} name="username" required />
                </label>
                <label>
                    Password
                    <input type="password" onChange={formLogin.handleChange} name="password" required />
                </label>
                <Button type="submit">Login</Button>
            </form>
            <Link to={"/register"}>
                <Button>Register</Button>
            </Link>
        </>
    )
}

export default Login