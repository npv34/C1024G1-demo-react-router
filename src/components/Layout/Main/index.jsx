import HeaderTop from "../HeaderTop/index.jsx";
import {Grid, Container} from "@mui/material";
import SideBar from "../SideBar/index.jsx";
import {Outlet, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useFormik} from "formik";
import {login} from "../../../redux/features/auth/AuthSlice.js";

function Main() {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispath = useDispatch();

    useEffect(() => {
        const userLogin = localStorage.getItem("userLogin")
        if (!auth.isLoggedIn && !userLogin) {
            navigate("/login")
        } else {
            dispath(login(userLogin))
        }
    }, []);



    return (
        <> { auth.isLoggedIn && (
            <>
                <HeaderTop/>
                <Container>
                    <Grid container spacing={2} sx={{ marginTop: 2}}>
                        <Grid size={3}>
                            <SideBar/>
                        </Grid>
                        <Grid size={9}>
                            <Outlet/>
                        </Grid>
                    </Grid>
                </Container>
                </>
            )}
        </>
    )
}

export default Main