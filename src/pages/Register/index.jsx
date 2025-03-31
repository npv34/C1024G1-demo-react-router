import {Button, TextField} from "@mui/material";
import {Link} from "react-router";
import {useFormik} from "formik";
import * as Yup from 'yup';

const validateFormRegister = Yup.object().shape({
    username: Yup.string().required("Username required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required").min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
})

function Register() {
    const formRegister = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validateFormRegister,
        onSubmit: values => {
            console.log(values);
        }
    })
    return (
        <>
            <h1>Register page</h1>
            <form onSubmit={formRegister.handleSubmit}>
                <TextField id="outlined-basic"
                           name={"username"}
                           error={formRegister.errors.username}
                           label="Outlined" variant="outlined"
                           helperText={formRegister.errors.username}
                           onChange={formRegister.handleChange}
                />
                <br/>
                <label>
                    Email
                    <input onChange={formRegister.handleChange} type="text" name="email" required/>
                    {formRegister.errors.email && (
                        <p>{formRegister.errors.email}</p>
                    )}
                </label>
                <br/>
                <label>
                    Password
                    <input onChange={formRegister.handleChange} type="password" name="password" required/>
                    {formRegister.errors.password && (
                        <p>{formRegister.errors.password}</p>
                    )}
                </label>
                <br/>
                <label>
                    Confirm Password
                    <input onChange={formRegister.handleChange} type="password" name="confirmPassword" required/>
                    {formRegister.errors.confirmPassword && (
                        <p>{formRegister.errors.confirmPassword}</p>
                    )}
                </label>
                <br/>
                <Button type="submit">Register</Button>
            </form>
            <Link to={"/login"}>
                <Button>Login</Button>
            </Link>
        </>
    )
}

export default Register