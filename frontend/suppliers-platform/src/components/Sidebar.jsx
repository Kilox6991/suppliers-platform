import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router

function Sidebar() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "200px", height: "100vh", backgroundColor: "#212529", gap: "20px" }}>
            <Link to="/" sx={{}}>
                <Button sx={{borderRadius: "100px", backgroundColor: "#c7c8c9", marginTop: "20px" }}>&lt;</Button>
            </Link>
            <Typography sx={{ color: "#c7c8c9", fontSize: "10px", textDecoration: "underline", textDecorationColor: "gray" }}>AVAILABLE APPS</Typography>
            <Button sx={{ borderRadius: "100px", backgroundColor: "#c7c8c9" }}>Profile</Button>
            <Button sx={{ borderRadius: "100px", backgroundColor: "#c7c8c9" }}>Supplies Admin</Button>
            <Button sx={{ borderRadius: "100px", backgroundColor: "#c7c8c9", marginBottom: "10px" }}>Logout</Button>
        </Box>
    );
}

export default Sidebar;
