import Navbar from "../components/Navbar"
import { Box } from "@mui/material"
import Sidebar from "../components/Sidebar"
import SupplierDetail from "../components/SupplierDetail/SupplierDetail"
import MenuDetail from "../components/MenuDetail"

function DetailPage() {
    return (
        <>
        <Navbar></Navbar>
        <Box sx={{display:"flex"}}>
        <Sidebar></Sidebar>
        <MenuDetail></MenuDetail>       
        </Box>
        </>
    )
}

export default DetailPage