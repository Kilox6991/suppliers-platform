import { Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar";
import MenuHome from "../components/MenuHome";



function HomePage() {
    return(
        <>
        <Navbar></Navbar>
        <Box sx={{display:"flex"}}>
        <Sidebar></Sidebar>
        <MenuHome></MenuHome>
        </Box>
        </>
    )
}

export default HomePage