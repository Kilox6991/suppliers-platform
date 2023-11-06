import { Box, Button } from "@mui/material"
import SupplierCard from "./SupplierCard"

function SupplierList() {
    return (
        <Box sx={{marginTop:"50px", marginLeft:"100px"}}>
        <Button sx={{marginBottom:"20px"}}>Supplier List V1</Button>
        <SupplierCard/>
        <SupplierCard/>
        <SupplierCard/>
        <SupplierCard/>
        </Box>
    )
}

export default SupplierList