import HeaderTop from "../HeaderTop/index.jsx";
import {Grid, Container} from "@mui/material";
import SideBar from "../SideBar/index.jsx";
import {Outlet} from "react-router";

function Main() {
    return (
        <>
            <HeaderTop/>
            <Container>
                <Grid container spacing={2} sx={{ marginTop: 2}}>
                    <Grid size={4}>
                        <SideBar/>
                    </Grid>
                    <Grid size={8}>
                        <Outlet/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Main