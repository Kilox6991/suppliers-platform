import Navbar from "../components/Navbar"
import { Box } from "@mui/material"
import Sidebar from "../components/Sidebar"
import SupplierDetail from "../components/SupplierDetail/SupplierDetail"

function DetailPage() {
    return (
        <>
        <Navbar></Navbar>
        <Box sx={{display:"flex"}}>
        <Sidebar></Sidebar>
        <SupplierDetail></SupplierDetail>
        </Box>
        </>
    )
}

export default DetailPage