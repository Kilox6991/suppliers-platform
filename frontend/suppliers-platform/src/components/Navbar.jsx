import logo from "../assets/logo.png";
import Box from '@mui/material/Box';

function Navbar() {
    return (
        <Box sx={{ display: "flex", backgroundColor: "#212529", gap:"20px" }}>
            <img
                src={logo}
                alt="logo-ct"
                style={{width:"200px", height:"100px"}}
            />
            <h2 style={{ color: "#67696c", marginTop:"50px" }}>
                CT Suppliers Platform v1.02
            </h2>
        </Box>
    );
}

export default Navbar;
