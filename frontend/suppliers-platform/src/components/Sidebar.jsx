import { Button, Box, Typography } from "@mui/material";

function Sidebar() {
    return (
        <Box display={"flex"} sx={{ flexDirection: "column", width: "200px",height:"400px", backgroundColor: "#212529", gap:"20px" }}>
            <Button sx={{borderRadius:"100px", backgroundColor:"#c7c8c9", marginTop:"20px"}}>&lt;</Button>
            <Typography sx={{ color: "gray", fontSize: "10px", textDecoration: "underline", textDecorationColor: "gray" }}>AVAILABLE APPS</Typography>
            <Button sx={{borderRadius:"100px", backgroundColor:"#c7c8c9"}}>Profile</Button>
            <Button sx={{borderRadius:"100px", backgroundColor:"#c7c8c9"}}>Supplies Admin</Button>
            <Button sx={{borderRadius:"100px", backgroundColor:"#c7c8c9", marginBottom:"10px"}}>Logout</Button>
        </Box>
    );
}

export default Sidebar;
